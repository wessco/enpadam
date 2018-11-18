import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaytmentprovProvider } from '../../providers/paytmentprov/paytmentprov';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaymetdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymetdetails',
  templateUrl: 'paymetdetails.html',
})
export class PaymetdetailsPage {
 paymentdata=this.navParams.get('data')
  constructor(public service:ServiceProvider,public paymentprov:PaytmentprovProvider,public navCtrl: NavController, public navParams: NavParams) {
  console.log(this.paymentdata)
  console.log(new Date(this.paymentdata.dateId))
  }   

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymetdetailsPage');
  }
  

  doPayment(){
    this.paymentprov.doPayment(this.paymentdata).then((res:any)=>{
      if(res.success){
          alert("payment res "+res)  
         
          this.paymentprov.savePaymentToApi(this.paymentdata).then((res:any)=>{
            this.navCtrl.setRoot(HomePage)   
          }).catch(err=>{
          alert("sommething went wrong")
          })    
        
          
      }else{
          alert("something went wrong please try again")
      }   
  })
  }

 

}
