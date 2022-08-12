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
import CardComponent from './search-page/card/card.component';
import SearchFormComponent from './search-page/search-form/search-form.component';
import PreviewComponent from './preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CardDirective } from './search-page/card/card.directive';
import { SettingsComponent } from './settings/settings.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    LoginComponent,
    AdminPanelComponent,
    SearchPageComponent,
    CardComponent,
    SearchFormComponent,
    PreviewComponent,
    CardDirective,
    SettingsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
class AppModule { }
export default AppModule;
