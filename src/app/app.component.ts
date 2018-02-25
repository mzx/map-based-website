import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(public authService: AuthService,
              public store: Store<any>,
              public snackBar: MatSnackBar) {
    store.select('router')
      .subscribe(info => {
        snackBar.open('Store Router: ' + (info && info.state.url), undefined, {
          duration: 3000
        });
      });
  }

  logout() {
    this.authService.logout();
  }
}
