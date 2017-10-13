import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { CustomLoggedHeaderComponent } from './../components/custom-logged-header/custom-logged-header.component';
import { SigninPage } from './../pages/signin/signin';
import { AuthService } from './../providers/auth/auth.service';
import { UserService } from './../providers/user/user.service';
import { HttpModule } from '@angular/http';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule, FirebaseAppConfig, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseAppConfig : FirebaseAppConfig = {
  apiKey: "AIzaSyBkvdL8yO2NWbl5ITKrebLQlHYfqG_ZQos",
  authDomain: "ionic2-chat-99137.firebaseapp.com",
  databaseURL: "https://ionic2-chat-99137.firebaseio.com",
  storageBucket: "ionic2-chat-99137.appspot.com",
  messagingSenderId: "480301005659"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    CustomLoggedHeaderComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService
  ]
})
export class AppModule {}
