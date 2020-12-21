import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public list(): Observable<Item[]> {
    return of([
      { id: 1, name: 'Pokémon Yellow' },
      { id: 2, name: 'Mega Man X' },
      { id: 3, name: 'The Legend of Zelda' },
      { id: 4, name: 'Pac-Man' },
      { id: 5, name: 'Super Mario World' },
    ])
  }
}
