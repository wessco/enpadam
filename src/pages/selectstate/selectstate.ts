import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BookingsummaryPage } from '../bookingsummary/bookingsummary';

/**
 * Generated class for the SelectstatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectstate',
  templateUrl: 'selectstate.html',
})
export class SelectstatePage {
  toppings: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.toppings={}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectstatePage');
  }
 close(){
    this.viewCtrl.dismiss();
  }
  ticketbook(){
    this.navCtrl.push(BookingsummaryPage)
  }
}
