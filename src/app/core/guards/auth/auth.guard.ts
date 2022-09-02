import { Injectable, OnDestroy } from '@angular/core';
import {
  CanActivate, CanLoad, Router, UrlTree,
} from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import LoginService from 'src/app/auth/service/login/login.service';

@Injectable({
  providedIn: 'root',
})
class AuthGuard implements CanActivate, CanLoad, OnDestroy {
  isLoggedIn : boolean = false;

  destroy$ : Subject<boolean> = new Subject<boolean>();

  constructor(private loginService : LoginService, private router : Router) {
    this.isLoggedIn = loginService.getIsLoggedIn();
    this.loginService.getIsLoggedInChange().pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
export default AuthGuard;
