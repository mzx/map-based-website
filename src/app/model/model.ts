import { UserInfo } from 'firebase/app';

class Profile {
  providerRequested: boolean;
  phoneNumber: string;
  photoURL: string;
  website: string;
  email: string;
  displayName?: string;
}

export class User {
  key: string;
  created: Date;
  roles: Roles;


  // displayName: string | null;
  // email: string | null;
  // phoneNumber: string | null;
  // photoURL: string | null;
  // providerId: string;
  // uid: string;
  userInfo: UserInfo;
  profile: Profile;

  constructor(au: UserInfo) {
    this.key = au.uid;

    this.userInfo = {
      displayName: au.displayName,
      email: au.email,
      phoneNumber: au.phoneNumber,
      photoURL: au.photoURL,
      providerId: au.providerId,
      uid: au.uid,
    };
    this.profile = createProfile(this.userInfo);
    this.roles = {client: true};
    this.created = new Date();
  }

}

export function createProfile({displayName, email, phoneNumber, photoURL}): Profile {
  return <Profile>{
    phoneNumber,
    displayName,
    email,
    providerRequested: false,
    photoURL
  };
}

export interface Roles {
  client: boolean;
  provider?: boolean;
  admin?: boolean;
}
