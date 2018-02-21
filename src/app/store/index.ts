import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { productsReducer } from './product/product.reducer';
import { Product } from './product/product.model';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  router: RouterReducerState<any>;
  products: Product[];
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  products: productsReducer
};
