import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products' ) || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Burger[]|Menu[]>([]);
  items$ = this.itemsSubject.asObservable();


  addToPanier(product: Menu & Burger) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }
}
