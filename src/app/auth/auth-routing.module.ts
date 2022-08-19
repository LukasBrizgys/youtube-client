import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import LoginComponent from "./components/login/login.component";
const routes : Routes = [
  { path: '' , component: LoginComponent, title: 'Login'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class AuthRoutingModule {}
export default AuthRoutingModule;