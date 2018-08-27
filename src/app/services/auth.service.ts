import { Injectable } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';
import { UserDetails } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authstatus = new Subject<boolean>();

  private user = new BehaviorSubject<UserDetails>({ id: null, firstname: null, lastname: null, emailid: null })

  constructor() { }

  getauthListner() {
    return this.authstatus.asObservable();
  }

  getAuthenicatedUserListner() {
    return this.user.asObservable();
  }
  autenticateUser(email: string, password: string) {

    // To Do
    // Call Api Service and Authenticate using HttpClientModule
    const user: UserDetails = {
      id: '#1',
      firstname: 'John',
      lastname: 'Trott',
      emailid: 'john@ecbCricket.com'
    };
    this.authstatus.next(true);
    this.user.next(user);

  }
}
