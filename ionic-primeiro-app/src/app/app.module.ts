import { LifecycleEventsPage } from './../pages/lifecycle-events/lifecycle-events';
import { ContactPage } from './../pages/contact/contact';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NgZone } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Teste1Page } from '../pages/teste1/teste1';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [MyApp, Teste1Page, ContactPage, LifecycleEventsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [ContactPage, MyApp, Teste1Page, LifecycleEventsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    // { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule {}
