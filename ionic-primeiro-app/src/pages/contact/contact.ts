import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
    console.log(this.navParams.get('type'));
    this.navParams.data.type;
    this.navParams.data['mensagem']();
    /* this.navParams.data.mensagem(); */
  }

  popPage(): void {
    this.navCtrl.pop();
  }
}
