import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapdirectionsPage } from '../mapdirections/mapdirections';

/**
 * Generated class for the BooktimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booktime',
  templateUrl: 'booktime.html',
})
export class BooktimePage {
  img: any;
  moviename: any;
  movieLanguage: any;
  theatername: any;
  verifybook: any;
  book: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.book=false
  }

    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooktimePage');
    this.img=this.navParams.get('img')
    this.moviename=this.navParams.get('moviename')
    this.movieLanguage=this.navParams.get('movieLanguage')
    this.theatername=this.navParams.get('theatername')
    this.verifybook=this.navParams.get('verifybook')
    console.log(this.img)
    console.log(this.moviename)
    console.log(this.movieLanguage)
    console.log(this.theatername)
    console.log(this.verifybook)

    if(this.verifybook=='Cancelled'){
      this.book=true
    }else{
      this.book=false
    }
  }
  maplocation(){
    this.navCtrl.push(MapdirectionsPage)
  }
}
