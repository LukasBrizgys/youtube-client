import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from 'src/app/search-page/search-item.model';

@Pipe({
  name: 'filter',
})
class FilterPipe implements PipeTransform {
  transform(value: SearchItem[], filterString: string): SearchItem[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    const filteredItems : SearchItem[] = [];
    value.forEach((item) => {
      if (item.snippet.title.toLowerCase().includes(filterString.toLowerCase())) {
        filteredItems.push(item);
      }
    });
    return filteredItems;
  }
}
export default FilterPipe;
