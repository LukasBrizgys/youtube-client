import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';
import Colors from 'src/app/shared/enums/colors';
import { dateDifferenceInDays, dateDifferenceInMonths } from 'src/app/shared/utils/dateUtils';

@Directive({
  selector: '[appCard]',
})
class CardDirective implements OnInit {
  @Input() publishDate : Date = new Date();

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    const currentDate : Date = new Date();
    const days = dateDifferenceInDays(new Date(this.publishDate), currentDate);
    const months = dateDifferenceInMonths(new Date(this.publishDate), currentDate);
    if (months > 0) {
      this.el.nativeElement.style.borderColor = Colors.yellow;
      if (months > 6) this.el.nativeElement.style.borderColor = Colors.red;
    }
    if (months <= 0) {
      if (days >= 7) this.el.nativeElement.style.borderColor = Colors.green;
      if (days < 7) this.el.nativeElement.style.borderColor = Colors.blue;
    }
  }
}
export default CardDirective;
