import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class LoginService {
  isLoggedIn : boolean = false;
  isLoggedInChange : Subject<boolean> = new Subject<boolean>();
  subscription! : Subscription;
  constructor(private router : Router) {

    this.subscription = this.isLoggedInChange.subscribe((value) => this.isLoggedIn = value);
    if(localStorage.getItem('auth-token')) {
      this.isLoggedInChange.next(true);
    } else{
      this.isLoggedInChange.next(false);
    }
  }
  getIsLoggedIn() : boolean {
    return this.isLoggedIn;
  }
  getIsLoggedInChange() : Observable<boolean> {
    return this.isLoggedInChange;
  }
  handleLogin() : void {
    localStorage.setItem('auth-token', crypto.randomUUID());
    this.isLoggedInChange.next(true);
    this.router.navigate(['/']);
  }

  handleLogout() : void {
    localStorage.removeItem('auth-token');
    this.isLoggedInChange.next(false);
    this.router.navigate(['/login']);
  }

}
export default LoginService;
