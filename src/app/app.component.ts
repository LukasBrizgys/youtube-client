import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
class AppComponent {
  searchKeyword : string = '';
  showSearchPage : boolean = false;
  isSettingsOpen : boolean = false;
  dateSortOrder : 'ascending' | 'descending' | null = null;
  viewsSortOrder : 'ascending' | 'descending' | null = null;
  filterKeyword : string = '';
  title = 'youtube-client';
  receiveKeyword($event : any) {
    this.searchKeyword = $event;
  }
  receiveShowSearchPage($event: any) {
    this.showSearchPage = $event;
  }
  receiveToggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }
  receiveDateSortOrder($event : any) {
    this.dateSortOrder = $event;
  }
  receiveViewsSortOrder($event : any) {
    this.viewsSortOrder = $event;
  }
  receiveFilterKeyword($event : any) {
    this.filterKeyword = $event;
  }
}
export default AppComponent;
