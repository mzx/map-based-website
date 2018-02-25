import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../store/product/product.model';
import { ProductState } from '../../store/product/product.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { AddProduct, ListProducts } from '../../store/product/product.actions';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(protected store: Store<AppState>, protected auth: AuthService) {
    this.auth.currentUser
      .filter(u => u !== null)
      .subscribe((user) => {
        this.store.dispatch(new ListProducts(user.key));
      });
  }

  ngOnInit() {
    this.products$ = this.store
      .select<ProductState>(state => state.productState)
      .select<Product[]>(state => state.products);
  }

  addProductClick() {
    this.store.dispatch(new AddProduct());
  }
}
