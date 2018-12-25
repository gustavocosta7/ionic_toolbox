import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'about-page',
  segment: 'sobre/:id',
  defaultHistory: ['HomePage'],
  priority: 'low'
})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('O id passado é : ', this.navParams.get(`id`));
  }
}
