import { Pipe, PipeTransform } from '@angular/core';
import SearchItem from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filter',
})
class FilterPipe implements PipeTransform {
  transform(value: SearchItem[], filterString: string): SearchItem[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    const filteredItems : SearchItem[] = value.filter(
      (item) => item.snippet.title.toLowerCase().includes(filterString.toLowerCase()),
    );
    return filteredItems;
  }
}
export default FilterPipe;
