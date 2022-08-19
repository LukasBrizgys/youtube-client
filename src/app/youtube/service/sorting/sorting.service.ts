import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class SortingService {
  sortByDateOrder : Subject<string | undefined> = new Subject<string | undefined>();

  sortByViewsOrder : Subject<string | undefined> = new Subject<string | undefined>();

  filterKeyword : Subject<string> = new Subject<string>();

  setSortByDateOrder(order : string | undefined) {
    this.sortByDateOrder.next(order);
  }

  setSortByViewsOrder(order : string | undefined) {
    this.sortByViewsOrder.next(order);
  }

  setFilterKeyword(string : string) {
    this.filterKeyword.next(string);
  }
}
export default SortingService;
