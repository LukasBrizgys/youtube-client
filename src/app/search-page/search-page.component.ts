import {
  Component, Input, OnChanges, OnInit, SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import SearchResponse from './search-response.model';
import SearchItem from './search-item.model';
import sortOrder from '../shared/enums/sortOrder';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
class SearchPageComponent implements OnInit, OnChanges {
  isLoading : boolean = false;

  isError : boolean = false;

  searchResponse!: SearchResponse;

  @Input() searchKeyword : string = '';

  @Input() sortByDateOrder? : string;

  @Input() sortByViewsOrder? : string;

  @Input() filterKeyword : string = '';

  constructor(private http: HttpClient) {}

  fetchSearchResults() : Observable<SearchResponse> {
    this.isLoading = false;
    return this.http.get<any>('assets/response.json')
      .pipe(
        map((data) => new SearchResponse(data.kind, data.etag, data.pageInfo, data.items)),
      );
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchSearchResults().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.searchResponse = data
      },
      error: () => this.isError = true
    });
  }

  ngOnChanges(changes : SimpleChanges) {
    if (changes['sortByViewsOrder']) {
      if (changes['sortByViewsOrder'].currentValue === sortOrder.asc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const viewsA = parseInt(a.statistics.viewCount, 10);
          const viewsB = parseInt(b.statistics.viewCount, 10);
          return viewsA - viewsB;
        });
      }
      if (changes['sortByViewsOrder'].currentValue === sortOrder.desc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const viewsA = parseInt(a.statistics.viewCount, 10);
          const viewsB = parseInt(b.statistics.viewCount, 10);
          return viewsB - viewsA;
        });
      }
    }
    if (changes['sortByDateOrder']) {
      if (changes['sortByDateOrder'].currentValue === sortOrder.asc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const dateA = new Date(a.snippet.publishedAt);
          const dateB = new Date(b.snippet.publishedAt);
          return dateA.getTime() - dateB.getTime();
        });
      }
      if (changes['sortByDateOrder'].currentValue === sortOrder.desc) {
        this.searchResponse.items.sort((a : SearchItem, b : SearchItem) => {
          const dateA = new Date(a.snippet.publishedAt);
          const dateB = new Date(b.snippet.publishedAt);
          return dateB.getTime() - dateA.getTime();
        });
      }
    }
  }
}
export default SearchPageComponent;
