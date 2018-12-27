import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';
import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  onAbout(): void {
    this.navCtrl.push('about-page', {
      id: 10
    });
  }

  pushPage(): void {
    this.navCtrl.push(ContactPage, {
      type: 'push',
      curso: 'Ionic',
      mensagem: () => {
        console.log('Essa é uma mensagem passada por parametro');
      }
    });
  }

  lifecycle(): void {
    this.navCtrl
      .push(LifecycleEventsPage)
      .then(() => {
        console.log('pagina empilhada');
      })
      .catch(error => {
        console.log('Acesso não autorizado');
      });
  }
}
