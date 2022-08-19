import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import LoginService from 'src/app/auth/service/login.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService : LoginService, private router : Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isAuthenticated()) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;

  }
}
export default AuthGuard;
