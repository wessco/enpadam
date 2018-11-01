import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooktimePage } from '../booktime/booktime';

/**
 * Generated class for the MovieticketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
   
@IonicPage()
@Component({
  selector: 'page-movieticket',
  templateUrl: 'movieticket.html',
})
export class MovieticketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieticketPage');
  }

  checkbook(img,moviename,movieLanguage,theatername,verifybook){
    var params={
      img:img,
      moviename:moviename,
      movieLanguage:movieLanguage,
      theatername:theatername,
      verifybook:verifybook
    }
    this.navCtrl.push(BooktimePage,params)
  }
}
