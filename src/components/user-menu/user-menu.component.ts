import { UserProfilePage } from './../../pages/user-profile/user-profile';
import { User } from './../../models/user.model';
import { AuthService } from './../../providers/auth/auth.service';
import { AlertController, App, MenuController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})
export class UserMenuComponent extends BaseComponent {

  @Input('user') currentUser: User;
  

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onProfile():void{
    this.navCtrl.push(UserProfilePage);
    
  }

}
