import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Product } from '../store/product/product.model';
import { AuthService } from './auth.service';

export const PRODUCTS = 'products';

@Injectable()
export class ProductService {
  constructor(public angularFireStore: AngularFirestore,
              public auth: AuthService) {
  }

  // delete(product: Product): Observable<string> {
  //   // return
  // }

  public addProduct(): Observable<Product> {
    const collRef = this.angularFireStore.collection<Product>(PRODUCTS);
    const key = this.angularFireStore.createId();
    const creatorKey = this.auth.currentUser.getValue().key;
    const product = {key, name: 'New Product', creatorKey};

    collRef.add(product); // TODO handle firestore errors;
    return Observable.of(product);
  }

  public listProducts(ownerKey: string): Observable<Product[]> {
    // TODO filter by ownerKey for 'my products'
    const collRef = this.angularFireStore.collection<Product>(PRODUCTS);

    return collRef.valueChanges();
  }
}

