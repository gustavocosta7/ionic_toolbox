import { ConfigPage } from './../pages/config/config';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, ConfigPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      //mode: 'md'
      platforms: {
        android: {
          mode: 'ios'
        },
        ios: {},
        windows: {
          tabsPlacement: 'bottom'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConfigPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
