import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ListOutletsComponent } from './list-outlets/list-outlets.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FeedbackModule } from '../feedback/feedback.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ListProductsComponent
      },
      {
        path: 'orders',
        component: ListOrdersComponent,
        children: [
          {
            path: '',
            loadChildren: 'app/feedback/feedback.module#FeedbackModule'
          },
        ]
      },
      {
        path: 'outlets',
        component: ListOutletsComponent
      }
    ]
  },
  {
    path: 'view-product/:key',
    component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule {
}
