import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header.component';
import PageNotFoundComponent from './page-not-found/page-not-found.component';
import RegistrationComponent from './registration/registration.component';
import LoginComponent from './login/login.component';
import AdminPanelComponent from './admin-panel/admin-panel.component';
import SearchPageComponent from './search-page/search-page.component';
import SearchFormComponent from './search-page/search-form/search-form.component';
import PreviewComponent from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    LoginComponent,
    AdminPanelComponent,
    SearchPageComponent,
    SearchFormComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
class AppModule { }
export default AppModule;
