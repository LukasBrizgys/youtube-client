import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class LoginService {
  isLoggedIn : boolean = false;

  constructor(private router : Router) {
    this.isLoggedIn = !!localStorage.getItem('auth-token');
  }

  isAuthenticated() : boolean {
    return this.isLoggedIn;
  }

  handleLogin() : void {
    localStorage.setItem('auth-token', crypto.randomUUID());
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }

  handleLogout() : void {
    localStorage.removeItem('auth-token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
export default LoginService;
