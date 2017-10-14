import { MessageBoxComponent } from './../components/message-box/message-box.component';
import { MessageService } from './../providers/message/message.service';
import { ChatService } from './../providers/chat/chat.service';
import { ChatPage } from './../pages/chat/chat';
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
  apiKey: "AIzaSyAfhNCK7K9kammfi_3cli59tjKMfzExOM0",
  authDomain: "ionic2-firebase-chat-69063.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-69063.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-69063.appspot.com",
  messagingSenderId: "460757227172"
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
    ChatPage,
    CustomLoggedHeaderComponent,
    CapitalizePipe,
    MessageBoxComponent
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
    SigninPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService,
    ChatService,
    MessageService
  ]
})
export class AppModule {}
