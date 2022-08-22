import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from './core/guards/auth/auth.guard';
import PageNotFoundComponent from './core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    title: 'dashboard',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      { path: 'videos', loadChildren: () => import('./youtube/youtube.module').then((m) => m.default) },
    ],
  },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.default) },
  { path: '404', component: PageNotFoundComponent, title: '404' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
class AppRoutingModule { }
export default AppRoutingModule;
