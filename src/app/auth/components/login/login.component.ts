import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import LoginService from '../../service/login/login.service';
import ValidationService from '../../service/validation/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
class LoginComponent {
  constructor(private loginService : LoginService, private fb : FormBuilder, private validationService : ValidationService) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, this.validationService.passwordStrengthValidator()]]
  })

  handleLogin = () : void => {
    this.loginService.handleLogin()
    console.log(this.loginForm);

  };
}
export default LoginComponent;
