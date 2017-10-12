import { HomePage } from './../home/home';
import { AuthService } from './../../providers/auth/auth.service';
import { SignupPage } from './../signup/signup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public authService: AuthService
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  onSubmit(): void {

    let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signinForm.value)
    .then((isLogged: boolean) =>{
        if(isLogged){
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }
    }).catch((error: any) => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);
    })
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

  onHomePage(): void{
    this.navCtrl.push(HomePage)
    .then((hasAcess: boolean) => {
      console.log("Autorizado: ", hasAcess);
    }).catch(err => {
      console.log("Não autorizado: ", err);
    })
  }

  onLogout() : void{
    this.authService.logout();
  }

}
