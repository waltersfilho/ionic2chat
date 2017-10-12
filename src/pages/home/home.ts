import { AuthService } from './../../providers/auth/auth.service';
import { UserService } from './../../providers/user/user.service';
import { User } from './../../models/user.model';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>;

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public userService: UserService) {

  }

  ionViewCanEnter() : Promise<boolean>{
    return this.authService.authenticated;
  }

  ionViewDidLoad(){
    this.users = this.userService.users;
    console.log(this.userService.users)
  }

  onChatCreate(user: User){
    console.log('User: ', user);
  }

  onSignUp():void{
    this.navCtrl.push(SignupPage);
  }


}
