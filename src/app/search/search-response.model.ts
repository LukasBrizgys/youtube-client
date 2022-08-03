import SearchItem from './search-item.model';

class SearchResponse {
  kind: string;

  etag: string;

  pageInfo: Object;

  items: SearchItem[];

  constructor(kind: string, etag: string, pageInfo: Object, items: SearchItem[]) {
    this.kind = kind;
    this.etag = etag;
    this.pageInfo = pageInfo;
    this.items = items;
  }
}
export default SearchResponse;
