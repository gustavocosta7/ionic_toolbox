import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { BoxComponent } from './box';
@NgModule({
  declarations: [BoxComponent],
  imports: [IonicModule],
  exports: [BoxComponent]
})
export class ComponentsModule {}
