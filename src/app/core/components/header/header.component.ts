import {
  Component, Input,
} from '@angular/core';
import LoginService from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
class HeaderComponent {
  constructor(private loginService : LoginService) {}

  isAuthenticated = () : boolean => this.loginService.isAuthenticated();

  @Input() isSettingsOpen : boolean = false;

  handleLogout = () : void => this.loginService.handleLogout();

  toggleSettings() : void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }
}
export default HeaderComponent;
