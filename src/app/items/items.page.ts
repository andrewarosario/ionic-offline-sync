import { Component, OnInit } from '@angular/core';
import { ItemService } from './services/item.service';
import { Observable } from 'rxjs';
import { Item } from './models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  public items$: Observable<Item[]>;

  constructor(
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.items$ = this.itemService.list();
  }

}
