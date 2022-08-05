import SearchItem from './search-item.model';
interface PageInfo {
  totalResults: number,
  resultsPerPage : number
}
class SearchResponse {
  kind: string;

  etag: string;

  pageInfo: PageInfo;

  items: SearchItem[];

  constructor(kind: string, etag: string, pageInfo: PageInfo, items: SearchItem[]) {
    this.kind = kind;
    this.etag = etag;
    this.pageInfo = pageInfo;
    this.items = items;
  }
}
export default SearchResponse;
