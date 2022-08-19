import { Injectable } from '@angular/core';
import {
  CanActivate, CanLoad, Router, UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import LoginService from 'src/app/auth/service/login.service';

@Injectable({
  providedIn: 'root',
})
class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService : LoginService, private router : Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
export default AuthGuard;
