import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { productsReducer, ProductState } from './product/product.reducer';
import { Product } from './product/product.model';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  router: RouterReducerState<any>;
  productState: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  productState: productsReducer
};
