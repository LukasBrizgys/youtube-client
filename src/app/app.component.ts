import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
class AppComponent {
  searchKeyword : string = '';

  showSearchPage : boolean = false;

  isSettingsOpen : boolean = false;

  dateSortOrder? : string;

  viewsSortOrder? : string;

  filterKeyword : string = '';

  title : string = 'youtube-client';

  setKeyword($event : string) : void {
    this.searchKeyword = $event;
  }

  setShowSearchPage($event: boolean) : void {
    this.showSearchPage = $event;
  }

  toggleSettings() : void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  setDateSortOrder($event? : string) : void {
    this.dateSortOrder = $event;
  }

  setViewsSortOrder($event? : string) : void {
    this.viewsSortOrder = $event;
  }

  setFilterKeyword($event : string) : void {
    this.filterKeyword = $event;
  }
}
export default AppComponent;
