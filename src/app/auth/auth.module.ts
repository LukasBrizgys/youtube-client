import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import RegistrationComponent from './components/registration/registration.component';
import AuthRoutingModule from './auth-routing.module';
import LoginComponent from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AuthRoutingModule,
  ],
})
class AuthModule { }
export default AuthModule;
