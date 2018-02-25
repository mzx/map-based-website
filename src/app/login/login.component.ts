import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as _ from 'lodash';
import { User } from '../model/model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  authState: Observable<any>;
  email = new FormControl('', [Validators.required, Validators.email]);
  displayName = new FormControl('', []);
  password = new FormControl('', [Validators.required]);
  userRoles: any;
  user: User;


  private subs: Subscription[] = [];

  constructor(private au: AuthService) {
    this.authState = au.angularFireAuth.authState;

    this.subs.push(
      au.currentUser.subscribe(
        u => {
          this.userRoles = _.keys(_.get(u, 'roles'));
          this.user = u;
        }
      ));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
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
    return this.email.hasError('required') ? 'You must enter a value'
      : this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLoginClick(email: string, password: string) {
    this.au.loginWithEmail(email, password);
  }

  onRegisterClick(email: string, password: string, displayName: string) {
    this.au.registerWithEmail(email, password, displayName);
  }
}
