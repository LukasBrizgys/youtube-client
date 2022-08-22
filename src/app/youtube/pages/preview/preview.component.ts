import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import SearchItem from '../../models/search-item.model';
import ItemService from '../../service/item/item.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
class PreviewComponent implements OnInit {
  isLoading : boolean = false;

  cardInfo! : SearchItem;

  constructor(
    private itemService : ItemService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    const id = this.activatedRoute.snapshot.url[0].path;
    this.itemService.getSingleItem(id).pipe(take(1)).subscribe({

      next: (value : SearchItem) => {
        this.isLoading = false;
        this.cardInfo = value;
      },
      error: () => {
        this.isLoading = false;
        this.router.navigate(['/404']);
      },
    });
  }
}
export default PreviewComponent;
