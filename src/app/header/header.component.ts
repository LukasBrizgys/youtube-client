import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
class HeaderComponent implements OnInit {
  searchKeyword = '';

  @Output() keywordEvent = new EventEmitter<string>();

  @Output() showSearchPageEvent = new EventEmitter<boolean>();

  @Output() toggleSettingsEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  handleSearch(keyword : string) {
    this.searchKeyword = keyword;
    this.keywordEvent.emit(this.searchKeyword);
    this.showSearchPageEvent.emit(true);
  }

  toggleSettings() {
    this.toggleSettingsEvent.emit();
  }
}
export default HeaderComponent;
