import { Action } from '@ngrx/store';
import { Product } from './product.model';

export enum ProductActionTypes {
  ADD = '[PRODUCT] ADD',
  ADD_ERROR = '[PRODUCT] ADD ERROR',
  ADD_SUCCESS = '[PRODUCT] ADD SUCCESS',
  LIST = '[PRODUCT] LIST',
  LIST_SUCCESS = '[PRODUCT] LIST SUCCESS',
  EDIT = '[PRODUCT] EDIT',
  DELETE = '[PRODUCT] DELETE'
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.ADD;

  constructor() {
  }
}

export class AddProductError implements Action {
  readonly type = ProductActionTypes.ADD_ERROR;

  constructor(public error: any) {
  }
}
export class AddProductSuccess implements Action {
  readonly type = ProductActionTypes.ADD_SUCCESS;

  constructor(public product: Product) {
  }
}


export class ListProducts implements Action {
  readonly type = ProductActionTypes.LIST;

  constructor(public ownerKey: string) {
  }
}

export class ListProductsSuccess implements Action {
  readonly type = ProductActionTypes.LIST_SUCCESS;

  constructor(public products: Product[]) {
  }
}

export class EditProduct implements Action {
  readonly type = ProductActionTypes.EDIT;

  constructor() {
  }
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE;

  constructor() {
  }
}

export type ProductActions =
  AddProduct
  | AddProductError
  | AddProductSuccess
  | ListProducts
  | ListProductsSuccess
  | EditProduct
  | DeleteProduct;
