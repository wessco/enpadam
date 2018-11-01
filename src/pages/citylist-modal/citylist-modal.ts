import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the CitylistModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citylist-modal',
  templateUrl: 'citylist-modal.html',
})
export class CitylistModalPage {
  cities=[]
  filterCities=[]
  constructor(public viewCtrl: ViewController,public service:ServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitylistModalPage');
    this.service.getcities().then(result => this.handleservice(result));
    }
    handleservice(result) {
        console.log(result);
        this.cities = result.CityValue;
        this.filterCities=this.cities
        console.log(this.cities);
        console.log(result.CityValue[0].id);
    }     
    close(){
      this.viewCtrl.dismiss()
    }       
         
    onInput(searchkey){  
      console.log(searchkey)
   
      let val=searchkey.data
      if (val && val.trim() != '') {
         val=searchkey.data.toLowerCase()
        this.filterCities = this.filterCities.filter((item) => {
        
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } 
      if(searchkey.inputType=='deleteContentBackward'){
     this.filterCities=this.cities
     if (val && val.trim() != '') {
      val=searchkey.data.toLowerCase()
      this.filterCities = this.filterCities.filter((item) => {
      
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
     }

      }

    console.log(this.filterCities)
     
    }    
    onCancel(event){
this.filterCities=this.cities
    }
    getCity(city){
this.viewCtrl.dismiss(city)
    }
}
