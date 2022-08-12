import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  dateSortOrder : 'ascending' | 'descending' | null = null;
  viewSortOrder : 'ascending' | 'descending' | null = null;
  filterKeyword : string = '';
  @Output() sortByDateEvent  = new EventEmitter<'ascending' | 'descending' | null>();
  @Output() sortByViewsEvent = new EventEmitter<'ascending' | 'descending' | null>();
  @Output() filterByKeywordEvent = new EventEmitter<string>();
  toggleSortByDate() {
    switch(this.dateSortOrder){
      case null:
        this.dateSortOrder = 'ascending';
        break;
      case 'ascending':
        this.dateSortOrder = 'descending';
        break;
      case 'descending':
        this.dateSortOrder = null;
        break;
      default:
        this.dateSortOrder = null;
    }
    this.sortByDateEvent.emit(this.dateSortOrder);
  }
  toggleSortByViews() {
    switch(this.viewSortOrder){
      case null:
        this.viewSortOrder = 'ascending';
        break;
      case 'ascending':
        this.viewSortOrder = 'descending';
        break;
      case 'descending':
        this.viewSortOrder = null;
        break;
      default:
        this.viewSortOrder = null;
    }
    this.sortByViewsEvent.emit(this.viewSortOrder);
  }
  handleChange(event: any) {
    this.filterKeyword = event.target.value;
    this.filterByKeywordEvent.emit(this.filterKeyword);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
