import { Message } from './../../models/message.model';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseService } from '../base/base.service';

@Injectable()
export class MessageService extends BaseService {

  constructor(
    public http: Http,
    public af: AngularFire) {
    super();
  }

  getMessages(userId1: string, userId2: string): FirebaseListObservable<Message[]> {
    return <FirebaseListObservable<Message[]>>this.af.database.list(`/messages/${userId1}-${userId2}`, {
      query: {
        orderByChild: 'timestamp'
      }
    }).catch(this.handleObservableError);

  }

  create(message: Message, listMessages: FirebaseListObservable<Message[]>): firebase.Promise<void> {
    return listMessages.push(message)
      .catch(this.handlePromiseError);
  }
}
