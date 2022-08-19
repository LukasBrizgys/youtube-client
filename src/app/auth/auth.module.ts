import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import RegistrationComponent from './components/registration/registration.component';
import AuthRoutingModule from './auth-routing.module';
import LoginComponent from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AuthRoutingModule
  ]
})
class AuthModule { }
export default AuthModule;
