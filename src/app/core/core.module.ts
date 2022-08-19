import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import FiltersComponent from './components/filters/filters.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import PageNotFoundComponent from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FiltersComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    FiltersComponent,
    MatIconModule,
  ]
})
class CoreModule { }
export default CoreModule;
