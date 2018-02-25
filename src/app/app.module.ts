import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportsModule } from './material-imports/material-imports.module';

import 'hammerjs';
import { RoutingModule } from './routing/routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AgmCoreModule } from '@agm/core';
import { AgmMapsPreviewComponent } from './agm-maps-preview/agm-maps-preview.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/index';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product/product.effects';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AgmMapsPreviewComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    RoutingModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    }),

    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    EffectsModule.forRoot([ProductEffects]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
