import { Component } from '@angular/core';
import LoginService from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
class LoginComponent {
  constructor(private loginService : LoginService) {}
  handleLogin = () : void => this.loginService.handleLogin();
}
export default LoginComponent;
