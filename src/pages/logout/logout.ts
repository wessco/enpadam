import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }


  // presentConfirm() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Confirm Log Out',
  //     message: 'Are you sure you want to log out?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Log Out',
  //         handler: () => {
  //           console.log('Logged out');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
