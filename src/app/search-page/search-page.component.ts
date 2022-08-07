import { Component, OnInit } from '@angular/core';
import SearchResponse from './search-response.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
class SearchPageComponent implements OnInit {
  searchResponse!: SearchResponse;

  ngOnInit(): void {
  }
}
export default SearchPageComponent;
