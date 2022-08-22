import {
  Component, Input, OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import LoginService from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
class HeaderComponent implements OnDestroy {
  @Input() isSettingsOpen : boolean = false;

  isLoggedIn : boolean = false;

  subscription! : Subscription;

  constructor(private loginService : LoginService) {
    this.isLoggedIn = this.loginService.getIsLoggedIn();
    this.subscription = this.loginService.getIsLoggedInChange().subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  handleLogout = () : void => this.loginService.handleLogout();

  toggleSettings() : void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
export default HeaderComponent;
