import { ComponentsModule } from '../../components';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  imports: [IonicPageModule.forChild(HomePage), ComponentsModule],
  declarations: [HomePage]
})
export class HomeModule {}
