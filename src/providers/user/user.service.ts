import { User } from './../../models/user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BaseService} from "../base/base.service"
import { Observable } from 'rxjs';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService extends BaseService {

  users: FirebaseListObservable<User[]>;

  constructor(
    public http: Http,
    public af: AngularFire) {
    super();

      this.users = this.af.database.list(`/users/`);

  }

  create(user: User): firebase.Promise<void> {
    return this.af.database.object(`/users/${user.uid}`)
    .set(user)
    .catch(this.handlePromiseError);
  }

  userExists(username:string): Observable<boolean> {
    return this.af.database.list(`/users`,{
      query:{
        orderByChild: 'username',
        equalTo: username
      }
    }).map((user: User[]) => {
      return UserService.length > 0;
    }).catch(this.handleObservableError);
  }
}
