import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'uploadTest',
        component: FileUploadComponent
      },
      {
        path: 'main',
        component: MainPageComponent
      },
      {
        path: 'profile',
        component: LoginComponent
      },

      {
        path: 'provider',
        loadChildren: 'app/provider/provider.module#ProviderModule'
      },

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
