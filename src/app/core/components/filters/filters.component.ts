import {
  Component, OnInit,
} from '@angular/core';
import SortingService from 'src/app/youtube/service/sorting/sorting.service';
import { SortOrder } from '../../../shared/enums/sortOrder';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
class FiltersComponent implements OnInit {
  dateSortOrder? : string;

  viewSortOrder? : string;

  filterKeyword : string = '';

  SORT_ORDER : typeof SortOrder = SortOrder;

  constructor(private sortingService : SortingService) { }

  ngOnInit() : void {
    this.sortingService.sortByDateOrder.subscribe((value : string | undefined) => {
      this.dateSortOrder = value;
    });
    this.sortingService.sortByViewsOrder.subscribe((value : string | undefined) => {
      this.viewSortOrder = value;
    });
    this.sortingService.filterKeyword.subscribe((value : string) => {
      this.filterKeyword = value;
    });
  }

  toggleSortByDate() : void {
    if (this.viewSortOrder) this.sortingService.setSortByViewsOrder(undefined);

    switch (this.dateSortOrder) {
      case undefined:
        this.sortingService.setSortByDateOrder(SortOrder.asc);
        break;
      case SortOrder.asc:
        this.sortingService.setSortByDateOrder(SortOrder.desc);
        break;
      case SortOrder.desc:
        this.sortingService.setSortByDateOrder(SortOrder.asc);
        break;
      default:
        this.sortingService.setSortByDateOrder(undefined);
    }
  }

  toggleSortByViews() : void {
    if (this.dateSortOrder) this.sortingService.setSortByDateOrder(undefined);

    switch (this.viewSortOrder) {
      case undefined:
        this.sortingService.setSortByViewsOrder(SortOrder.asc);
        break;
      case SortOrder.asc:
        this.sortingService.setSortByViewsOrder(SortOrder.desc);
        break;
      case SortOrder.desc:
        this.sortingService.setSortByViewsOrder(SortOrder.asc);
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
