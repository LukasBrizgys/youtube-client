import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
class AppComponent {
  searchKeyword : string = '';
  showSearchPage : boolean = false;
  title = 'youtube-client';
  receiveKeyword($event : any) {
    this.searchKeyword = $event;
    //console.log(this.searchKeyword);
  }
  receiveShowSearchPage($event: any) {
    this.showSearchPage = $event;
    console.log(this.showSearchPage)
  }
}
export default AppComponent;
