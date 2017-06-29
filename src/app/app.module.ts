import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { provideAuth }    from 'angular2-jwt';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { UserProfilePage } from '../pages/userprofile/userprofile';
import { HomePage } from '../pages/home/home';
import { TrackPage } from '../pages/track/track';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Auth } from '../providers/auth';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    UserProfilePage,
    HomePage,
    TrackPage,
    TabsPage,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UserProfilePage,
    HomePage,
    TrackPage,
    TabsPage,
    Login,
    Register,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Geolocation,
    InAppBrowser,
    provideAuth({
      headerPrefix: 'JWT'
    }),
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
