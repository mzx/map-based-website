import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/model';
import 'rxjs/add/operator/take';
import { AngularFirestore } from 'angularfire2/firestore';
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

export const USERS = 'users';

@Injectable()
export class AuthService {
  users: AngularFireObject<any>;
  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(public angularFireAuth: AngularFireAuth, public angularFireStore: AngularFirestore) {
    this.angularFireAuth.auth.useDeviceLanguage();

    this.angularFireAuth.authState
      .switchMap((a: any, i: number) => {
        if (a) {
          // return Observable.of(null);
          return this.angularFireStore.doc<User>(`${USERS}/${a.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
      .subscribe(this.currentUser); // TODO pass subject to subscribe is preferred
      // .subscribe((u: User) => {
      //   this.currentUser.next(u);
      // });

    this.angularFireAuth.auth.onAuthStateChanged(state => {
      // if (state && state.uid) {
      //   this.createUserInDB(state);
      // }
    });
  }

  loginWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new GoogleAuthProvider())
      .then((c) => {
        this.createUserInDB(c.user);
      });
  }

  loginWithFacebook() {
    this.angularFireAuth.auth.signInWithPopup(new FacebookAuthProvider())
      .then((c) => {
        this.createUserInDB(c.user);
      });
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

  loginWithEmail(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((c) => {
        this.createUserInDB(c);
      }).catch((error) => {
      console.error(error.message);
    });
  }

  registerWithEmail(email: string, password: string, displayName: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((c) => {
        // this.createUserInDB(<User>{...c, displayName: dn});
        this.createUserInDB(c, displayName);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  private createUserInDB(state: firebase.User, displayName: string = null) {
    const userRef = this.angularFireStore.doc<User>(`${USERS}/${state.uid}`);
    userRef
      .valueChanges()
      .subscribe((user) => {
        console.log(user);
        if (!user || !user.roles) {
          const newUser = new User(state);
          newUser.profile.displayName = newUser.profile.displayName || displayName;

          // Classes not allowed on set
          userRef.set({...newUser}, {merge: true});
        }

      });
  }

}
