import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/Observable';
import {
  AddProduct, AddProductError, AddProductSuccess, ListProducts, ListProductsSuccess,
  ProductActionTypes
} from './product.actions';
import { Product } from './product.model';

@Injectable()
export class ProductEffects {
  @Effect()
  add$ = this.actions$
    .ofType(ProductActionTypes.ADD)
    .switchMap((action: AddProduct) => {
      return this.productService.addProduct()
        // .catch((error) => Observable.of(new AddProductError(error)))
        .map((result: Product) => new AddProductSuccess(result));
    });

  @Effect()
  list$ = this.actions$
    .ofType(ProductActionTypes.LIST)
    .switchMap((action: ListProducts) => {
      return this.productService.listProducts(action.ownerKey)
        // .catch((error) => Observable.of(new AddProductError(error)))
        .map((result: Product[]) => new ListProductsSuccess(result));
    });

  constructor(protected actions$: Actions, protected productService: ProductService) {
  }
}
