import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

function dateDifferenceInDays(date1 : Date, date2: Date) {
  const differenceInMilliseconds = date2.getTime() - date1.getTime();
  const days = Math.ceil(differenceInMilliseconds / (1000 * 3600 * 24));
  return days;
}
function dateDifferenceInMonths(date1 : Date, date2 : Date) {
  let months = 0;
  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth() + 1;
  months += date2.getMonth();
  return months;
}

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
      this.el.nativeElement.style.borderColor = 'yellow';
      if (months > 6) this.el.nativeElement.style.borderColor = 'red';
    }
    if (months <= 0) {
      if (days >= 7) this.el.nativeElement.style.borderColor = 'green';
      if (days < 7) this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
export default CardDirective;
