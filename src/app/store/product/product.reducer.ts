import { Product } from './product.model';
import { ProductActions, ProductActionTypes } from './product.actions';


export interface ProductState {
  products?: Product[];
}

export function productsReducer(state: ProductState = {products: []}, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionTypes.LIST:
      return state;
    case ProductActionTypes.LIST_SUCCESS:
      return {...state, products: [...action.products]};
    case ProductActionTypes.ADD:
      return state;
    case ProductActionTypes.ADD_SUCCESS:
      return {...state, products: [...state.products, action.product]};
    default:
      return state;
  }
}
