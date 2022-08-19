import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import SearchItem from '../../models/search-item.model';
import SearchResponse from '../../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
class ItemService {


  constructor(private http: HttpClient) { }

  fetchSearchResults() : Observable<SearchResponse> {
    return this.http.get<any>('assets/response.json')
      .pipe(
        map((data : SearchResponse) => new SearchResponse(data.kind, data.etag, data.pageInfo, data.items)),
      );
  }
  getSingleItem(id : string) : Observable<SearchItem> {
    return this.http.get<any>('assets/response.json')
      .pipe(
        map((data : SearchResponse) => {
          const item : SearchItem | undefined = data.items.find(item => item.id === id);
          if(!item) throw throwError(() => new Error('error occured'));
          return item;
        }
        )
      );
  }

}
export default ItemService;
