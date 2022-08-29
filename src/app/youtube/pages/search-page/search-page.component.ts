import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { mergeMap, Subject, takeUntil, tap } from 'rxjs';
import SearchResponse from '../../models/search-response.model';
import SearchItem from '../../models/search-item.model';
import { SortOrder } from '../../../shared/enums/sortOrder';
import SortingService from '../../service/sorting/sorting.service';
import ItemService from '../../service/item/item.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
class SearchPageComponent implements OnInit, OnDestroy {
  isLoading : boolean = false;

  isError : boolean = false;

  searchResponse!: SearchResponse;

  filterKeyword : string = '';

  destroy$ : Subject<boolean> = new Subject<boolean>();

  constructor(private sortingService : SortingService, private itemService : ItemService) {}

  ngOnInit(): void {
    this.itemService.getSearchStringObs()
      .pipe(
        tap(() => { this.isLoading = true }),
        mergeMap((result : string) =>
          this.itemService.fetchSearchResults(result)),
          takeUntil(this.destroy$)
          )
          .subscribe({
            next: (data : SearchResponse) => {
              this.isLoading = false;
              this.searchResponse = data;
            }
          })
    this.sortingService.sortByDateOrder
      .pipe(takeUntil(this.destroy$))
      .subscribe((value : string | undefined) => {
        if (value === SortOrder.asc) {
          this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
            const dateA = new Date(a.snippet.publishedAt);
            const dateB = new Date(b.snippet.publishedAt);
            return dateA.getTime() - dateB.getTime();
          });
        }
        if (value === SortOrder.desc) {
          this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
            const dateA = new Date(a.snippet.publishedAt);
            const dateB = new Date(b.snippet.publishedAt);
            return dateB.getTime() - dateA.getTime();
          });
        }
      });

    this.sortingService.sortByViewsOrder
      .pipe(takeUntil(this.destroy$))
      .subscribe((value : string | undefined) => {
        if (value === SortOrder.asc) {
          this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
            const viewsA = parseInt(a.statistics.viewCount, 10);
            const viewsB = parseInt(b.statistics.viewCount, 10);
            return viewsA - viewsB;
          });
        }
        if (value === SortOrder.desc) {
          this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
            const viewsA = parseInt(a.statistics.viewCount, 10);
            const viewsB = parseInt(b.statistics.viewCount, 10);
            return viewsB - viewsA;
          });
        }
      });
    this.sortingService.filterKeyword.pipe(takeUntil(this.destroy$)).subscribe((value : string) => {
      this.filterKeyword = value;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
export default SearchPageComponent;
