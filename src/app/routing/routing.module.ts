import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'main', component: MainPageComponent},
      {path: 'profile', component: LoginComponent},

      {path: 'provider', loadChildren: 'app/provider/provider.module#ProviderModule'},

    ])
  ], declarations: [], exports: [RouterModule]
})
export class RoutingModule {
}
