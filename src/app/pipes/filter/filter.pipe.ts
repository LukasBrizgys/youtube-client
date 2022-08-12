import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from 'src/app/search-page/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: SearchItem[], filterString: string): SearchItem[] {
    if(value.length === 0 || !filterString) {
      return value;
    }
    let filteredItems : SearchItem[] = [];
    for(const item of value) {
      if(item.snippet.title.toLowerCase().includes(filterString.toLowerCase())) {
        filteredItems.push(item);
      }
    }
    return filteredItems;
  }

}
