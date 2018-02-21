import { Product } from './product.model';
import { ProductActions, ProductActionTypes } from './product.actions';

export function productsReducer(state: Product[] = [], action: ProductActions): Product[] {
  switch (action.type) {

    case ProductActionTypes.LIST:
      return [];
    case ProductActionTypes.LIST_SUCCESS:
      return [...action.products];
    case ProductActionTypes.ADD:
      return state;
    case ProductActionTypes.ADD_SUCCESS:
      return [...state, action.product];
    default:
      return state;
  }
}
