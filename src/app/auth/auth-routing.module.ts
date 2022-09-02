import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AdminPanelComponent from './components/admin-panel/admin-panel.component';
import LoginComponent from './components/login/login.component';

const routes : Routes = [
  { path: '', component: LoginComponent, title: 'Login' },
  { path: 'admin', component: AdminPanelComponent, title: 'Admin panel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
class AuthRoutingModule {}
export default AuthRoutingModule;
