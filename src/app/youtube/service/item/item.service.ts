import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  debounceTime, map, Observable, Subject, switchMap, throwError,
} from 'rxjs';
import SearchItem from '../../models/search-item.model';
import SearchResponse from '../../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
class ItemService {
  searchStringObs : Subject<string> = new Subject<string>();

  searchResponseObs : Subject<SearchResponse> = new Subject<SearchResponse>();

  searchResponse! : SearchResponse;

  constructor(private http: HttpClient) { }

  fetchSearchResults(searchString : string) : Observable<SearchResponse> {
    const idArray : string[] = [];
    return this.http
      .get<any>(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchString}`)
      .pipe(
        map((response : any) => new SearchResponse(
          response.kind,
          response.etag,
          response.pageInfo,
          response.items.map((item : any) => new SearchItem(
            item.id.videoId,
            item.id.kind,
            item.etag,
            item.snippet,
            item.statistics,
          )),
        )),
        switchMap((data : SearchResponse) => {
          data.items.forEach((video : any) => { idArray.push(video.id); });
          return this.fetchVideoDetails(idArray);
        }),
      );
  }

  fetchVideoDetails(ids : string[]) {
    return this.http.get<SearchResponse>(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids.toString()}`);
  }

  getSearchStringObs() : Observable<string> {
    return this.searchStringObs.pipe(debounceTime(1000));
  }

  getSingleVideo(id : string) : Observable<SearchItem> {
    return this.fetchVideoDetails([id])
      .pipe(
        map((data : SearchResponse) => {
          const searchItem : SearchItem | undefined = data.items.find((item) => item.id === id);
          /* eslint-disable @typescript-eslint/no-throw-literal */
          if (!searchItem) throw throwError(() => new Error('error occured'));
          return searchItem;
        }),
      );
  }

  search(searchString : string) {
    this.searchStringObs.next(searchString);
  }
}
export default ItemService;
