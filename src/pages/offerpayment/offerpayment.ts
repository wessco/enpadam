import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';



@IonicPage()
@Component({
  selector: 'page-offerpayment',
  templateUrl: 'offerpayment.html',
})
export class OfferpaymentPage {
  
  relationship: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.relationship='Offer Code'
    console.log(this.relationship)

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferpaymentPage');
  }

}
