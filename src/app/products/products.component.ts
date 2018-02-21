import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Product } from '../store/product/product.model';
import { Observable } from 'rxjs/Observable';
import { AddProduct, ListProducts } from '../store/product/product.actions';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(protected store: Store<AppState>, protected auth: AuthService) {
    this.auth.currentUser
      .filter(u => u !== null)
      .subscribe((user) => {
        this.store.dispatch(new ListProducts(user.key));
      });
  }

  ngOnInit() {
    this.products$ = this.store.select('products');
  }

  addProductClick() {
    this.store.dispatch(new AddProduct());
  }
}
