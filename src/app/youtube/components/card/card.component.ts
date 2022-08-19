import { Component, Input } from '@angular/core';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
class CardComponent {
  @Input() cardInfo! : SearchItem;
}
export default CardComponent;
