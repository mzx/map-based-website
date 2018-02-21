import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'main', component: MainPageComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'product-edit/:key', component: ProductsComponent},
      {path: 'profile', component: LoginComponent},

    ])
  ], declarations: [], exports: [RouterModule]
})
export class RoutingModule {
}
