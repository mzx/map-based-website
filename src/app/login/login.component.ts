import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authState: Observable<any>;
  email = new FormControl('', [Validators.required, Validators.email]);
  displayName = new FormControl('', []);
  password = new FormControl('', [Validators.required]);
  userRoles: any;
  private ownerKey: any;


  constructor(private au: AuthService) {
    this.authState = au.angularFireAuth.authState;

    au.currentUser.map(u => {
      this.userRoles = _.keys(_.get(u, 'roles'));
      this.ownerKey = _.get(u, 'key');
      return true;
    }).subscribe();
  }

  ngOnInit(): void {
  }

  onGoogleLoginClick() {
    this.au.loginWithGoogle();
  }

  onFBLoginClick() {
    this.au.loginWithFacebook();
  }

  onLogout() {
    this.au.logout();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLoginClick(email: string, password: string) {
    this.au.loginWithEmail(email, password);
  }

  onRegisterClick(email: string, password: string, displayName: string) {

    this.au.registerWithEmail(email, password, displayName);
  }
}
