import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';

/**
 * Generated class for the OtpconformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otpconform',
  templateUrl: 'otpconform.html',
})
export class OtpconformPage {
  otp: any;
  userid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceProvider) {
    this.otp={}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpconformPage');
  }

  verifyotp(){
    this.userid=localStorage.getItem('ticket_userid')
    this.navCtrl.setRoot(OtpconformPage)
    console.log(this.otp)
        if(this.validate()){
         this.service.verify(this.otp.number,this.userid)
          .then((results)=> this.verify(results))
        }
    }

    verify(results){
      console.log(results)  
      console.log(results.map.status)
      if(results.map.status =='success'){
        this.navCtrl.setRoot(HomePage)
      }else {
        alert("sorry! your number is not valid")
      }
    }
  

validate(){
  console.log(this.otp)
  if(this.otp.number == "" || this.otp.number == undefined){
    alert("please valid otp number")
    return false
  }
  return true
}

}
