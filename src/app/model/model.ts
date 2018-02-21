export class User {
  key: string;
  email: string;
  photoUrl: string;
  displayName: string;
  created: Date;

  roles: Roles;
  phone: string;

  constructor(authData) {
    this.key = authData.uid;
    this.email = authData.email;
    this.displayName = authData.displayName;
    this.photoUrl = authData.photoURL;

    this.roles = {client: true};
    this.created = new Date();
  }
}

export interface Roles {
  client: boolean;
  provider?: boolean;
  admin?: boolean;
}
