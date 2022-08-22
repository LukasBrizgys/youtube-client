import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import SearchItem from '../../models/search-item.model';
import SearchResponse from '../../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
class ItemService {
  constructor(private http: HttpClient) { }

  fetchSearchResults() : Observable<SearchResponse> {
    return this.http.get<any>('assets/response.json')
      .pipe(
        map((data : SearchResponse) => new SearchResponse(
          data.kind,
          data.etag,
          data.pageInfo,
          data.items,
        )),
      );
  }

  getSingleItem(id : string) : Observable<SearchItem> {
    return this.http.get<any>('assets/response.json')
      .pipe(
        map((data : SearchResponse) => {
          const searchItem : SearchItem | undefined = data.items.find((item) => item.id === id);
          /* eslint-disable @typescript-eslint/no-throw-literal */
          if (!searchItem) throw throwError(() => new Error('error occured'));
          return searchItem;
        }),
      );
  }
}
export default ItemService;
