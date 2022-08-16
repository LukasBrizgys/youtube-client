import {
  Component, EventEmitter, Output,
} from '@angular/core';
import sortOrder from '../shared/enums/sortOrder';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
class SettingsComponent {
  dateSortOrder? : string;

  viewSortOrder? : string;

  filterKeyword : string = '';

  SORT_ORDER = sortOrder;

  @Output() sortByDateEvent = new EventEmitter<string | undefined>();

  @Output() sortByViewsEvent = new EventEmitter<string | undefined>();

  @Output() filterByKeywordEvent = new EventEmitter<string>();

  toggleSortByDate() : void {
    if (this.viewSortOrder) this.viewSortOrder = undefined;
    switch (this.dateSortOrder) {
      case undefined:
        this.dateSortOrder = sortOrder.asc;
        break;
      case sortOrder.asc:
        this.dateSortOrder = sortOrder.desc;
        break;
      case sortOrder.desc:
        this.dateSortOrder = sortOrder.asc;
        break;
      default:
        this.dateSortOrder = undefined;
    }

    this.sortByDateEvent.emit(this.dateSortOrder);
  }

  toggleSortByViews() : void {
    if (this.dateSortOrder) this.dateSortOrder = undefined;
    switch (this.viewSortOrder) {
      case undefined:
        this.viewSortOrder = sortOrder.asc;
        break;
      case sortOrder.asc:
        this.viewSortOrder = sortOrder.desc;
        break;
      case sortOrder.desc:
        this.viewSortOrder = sortOrder.asc;
        break;
      default:
        this.viewSortOrder = undefined;
    }
    this.sortByViewsEvent.emit(this.viewSortOrder);
  }

  handleChange(event: any) : void {
    this.filterKeyword = event.target.value;
    this.filterByKeywordEvent.emit(this.filterKeyword);
  }
}
export default SettingsComponent;
