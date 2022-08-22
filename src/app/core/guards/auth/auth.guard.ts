import { Injectable, OnDestroy } from '@angular/core';
import {
  CanActivate, CanLoad, Router, UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import LoginService from 'src/app/auth/service/login.service';

@Injectable({
  providedIn: 'root',
})
class AuthGuard implements CanActivate, CanLoad, OnDestroy {
  isLoggedIn : boolean = false;

  subscription! : Subscription;

  constructor(private loginService : LoginService, private router : Router) {
    this.isLoggedIn = loginService.getIsLoggedIn();
    this.loginService.getIsLoggedInChange().subscribe((value) => {
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
    this.subscription.unsubscribe();
  }
}
export default AuthGuard;
