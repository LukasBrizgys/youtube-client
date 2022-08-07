import { Component, Input, OnInit } from '@angular/core';
import SearchItem from '../search-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
class CardComponent implements OnInit {
  @Input() cardInfo! : SearchItem;

  ngOnInit(): void {
  }
}
export default CardComponent;
