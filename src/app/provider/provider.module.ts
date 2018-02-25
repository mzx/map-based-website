import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ListOutletsComponent } from './list-outlets/list-outlets.component';
import { ViewProductComponent } from './view-product/view-product.component';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    MaterialImportsModule
  ],
  declarations: [HomeComponent, ListProductsComponent, ListOrdersComponent, ListOutletsComponent, ViewProductComponent]
})
export class ProviderModule {
}
