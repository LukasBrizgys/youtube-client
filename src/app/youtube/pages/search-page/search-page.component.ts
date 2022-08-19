import {
  Component, Input, OnInit,
} from '@angular/core';
import SearchResponse from '../../models/search-response.model';
import SearchItem from '../../models/search-item.model';
import sortOrder from '../../../shared/enums/sortOrder';
import SortingService from '../../service/sorting/sorting.service';
import ItemService from '../../service/item/item.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
class SearchPageComponent implements OnInit {
  isLoading : boolean = false;

  isError : boolean = false;

  searchResponse!: SearchResponse;

  @Input() searchKeyword : string = '';

  filterKeyword : string = '';

  constructor(private sortingService : SortingService, private itemService : ItemService) {}



  ngOnInit(): void {
    this.isLoading = true;
    this.itemService.fetchSearchResults().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.searchResponse = data;
      },
      error: () => { this.isError = true; },
    });
    this.sortingService.sortByDateOrder.subscribe((value : string | undefined) => {
      if(value === sortOrder.asc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const dateA = new Date(a.snippet.publishedAt);
          const dateB = new Date(b.snippet.publishedAt);
          return dateA.getTime() - dateB.getTime();
        });
      }
      if(value === sortOrder.desc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const dateA = new Date(a.snippet.publishedAt);
          const dateB = new Date(b.snippet.publishedAt);
          return dateB.getTime() - dateA.getTime();
        });
      }
    })

    this.sortingService.sortByViewsOrder.subscribe((value : string | undefined) => {
      if(value === sortOrder.asc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const viewsA = parseInt(a.statistics.viewCount, 10);
          const viewsB = parseInt(b.statistics.viewCount, 10);
          return viewsA - viewsB;
        });
      }
      if(value === sortOrder.desc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const viewsA = parseInt(a.statistics.viewCount, 10);
          const viewsB = parseInt(b.statistics.viewCount, 10);
          return viewsB - viewsA;
        });
      }
    })
    this.sortingService.filterKeyword.subscribe((value : string) => {
      this.filterKeyword = value;
    })
  }

}
export default SearchPageComponent;