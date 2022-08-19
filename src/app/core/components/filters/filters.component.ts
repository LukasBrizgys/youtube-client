import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import SortingService from 'src/app/youtube/service/sorting/sorting.service';
import sortOrder from '../../../shared/enums/sortOrder';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
class FiltersComponent implements OnInit {
  dateSortOrder? : string;

  viewSortOrder? : string;

  filterKeyword : string = '';

  SORT_ORDER : typeof sortOrder = sortOrder;

  constructor( private sortingService : SortingService ) { }
  ngOnInit() : void {
    this.sortingService.sortByDateOrder.subscribe((value : string | undefined) => {
      this.dateSortOrder = value;
    });
    this.sortingService.sortByViewsOrder.subscribe((value : string | undefined) => {
      this.viewSortOrder = value;
    });
    this.sortingService.filterKeyword.subscribe((value : string) => {
      this.filterKeyword = value;
    })
  }
  toggleSortByDate() : void {
    if(this.viewSortOrder) this.sortingService.setSortByViewsOrder(undefined);

    switch(this.dateSortOrder) {
      case undefined:
        this.sortingService.setSortByDateOrder(sortOrder.asc);
        break;
      case sortOrder.asc:
        this.sortingService.setSortByDateOrder(sortOrder.desc);
        break;
      case sortOrder.desc:
        this.sortingService.setSortByDateOrder(sortOrder.asc);
        break;
      default:
        this.sortingService.setSortByDateOrder(undefined);
    }
  };
  toggleSortByViews() : void {
    if(this.dateSortOrder) this.sortingService.setSortByDateOrder(undefined);

    switch(this.viewSortOrder) {
      case undefined:
        this.sortingService.setSortByViewsOrder(sortOrder.asc);
        break;
      case sortOrder.asc:
        this.sortingService.setSortByViewsOrder(sortOrder.desc);
        break;
      case sortOrder.desc:
        this.sortingService.setSortByViewsOrder(sortOrder.asc);
        break;
      default:
        this.sortingService.setSortByViewsOrder(undefined);
    }
  }
  handleChange(event: any) : void {
    this.sortingService.setFilterKeyword(event.target.value);
  }
}
export default FiltersComponent;
