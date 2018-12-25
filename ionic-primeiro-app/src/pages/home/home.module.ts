import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  imports: [IonicPageModule.forChild(HomePage)],
  declarations: [HomePage]
})
export class HomeModule {}
