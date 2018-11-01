import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { OfferpaymentPage } from '../offerpayment/offerpayment';
import { SocialloginPage } from '../sociallogin/sociallogin';
import * as $ from 'jquery';
import { LoginPage } from '../login/login';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  relationship: string;
  information: string;
  pay: any;
  otp: any;
  userid: string;
  relationship1: string;
  paypalcash: any;
  ezeapp: boolean;
  paypal: boolean;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public popoverCtrl: PopoverController,public service: ServiceProvider) {
    this.relationship='Offer Code'
    this.relationship1='Credit/Debit Card'
    this.pay={}
    this.otp={}
    this.paypal=false
    this.ezeapp=false
  }
  radio_grid1(){
    console.log('change')
    if(this.paypalcash=='paypal'){
      this.paypal=true
      this.ezeapp=false
    }else if(this.paypalcash=='ezeapp'){
      this.ezeapp=true
      this.paypal=false
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.pay.email=this.navParams.get('email')
    this.pay.mobilenumber=this.navParams.get('mobilenumber')
    console.log(this.pay.email)
    console.log(this.pay.mobilenumber)
  }

  
  // presentProfileModal(myEvent){

  //   let profileModal = this.modalCtrl.create(SocialloginPage);
  //  profileModal.present();
  //   }


    // let profileModal = this.modalCtrl.create(SocialloginPage);
    // profileModal.onDidDismiss(data => {
    //   }
    // });
    // profileModal.present();

  //   let popover = this.popoverCtrl.create(SocialloginPage);
  //   popover.present({
  //     ev: myEvent
  //   });
  // }
  

  
  paymentlist(){
    // this.navCtrl.push(OfferpaymentPage)

    $(".toggle").toggle('slow');
    $( ".toggleClass" ).toggleClass( "highlight" );
  }
  bankinfo(){
    $(".toggle1").toggle('slow');
    $( ".toggle2" ).hide();
    $( ".toggle3" ).hide();
    $( ".toggle4" ).hide();
  }
  bankinfo1(){
    $(".toggle2").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle3" ).hide();
    $( ".toggle4" ).hide();
    
  }
  bankinfo2(){
    $(".toggle3").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle2" ).hide();
    $( ".toggle4" ).hide();
  }
  bankinfo3(){
    $(".toggle4").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle2" ).hide();
    $( ".toggle3" ).hide();
  }


  mobileinfo1(){
    $(".toggle1").toggle('slow');
    $( ".toggle2" ).hide();
    $( ".toggle3" ).hide();
    $( ".toggle4" ).hide();
  }
  mobileinfo2(){
    $(".toggle2").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle3" ).hide();
    $( ".toggle4" ).hide();
  }
  mobileinfo3(){
    $(".toggle3").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle2" ).hide();
    $( ".toggle4" ).hide();
  }
  mobileinfo4(){
    $(".toggle4").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle2" ).hide();
    $( ".toggle3" ).hide();
  }

  otherinfo(){
    $(".toggle1").toggle('slow');  
  }

  paymobile1(){
    $(".toggle1").toggle('slow');  
    $( ".toggle2" ).hide();
    $( ".toggle3" ).hide();
    $( ".toggle4" ).hide();
  }

  paymobile2(){
    $(".toggle2").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle3" ).hide();
    $( ".toggle4" ).hide();
  }

  paymobile3(){
    $(".toggle3").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle2" ).hide();
    $( ".toggle4" ).hide();
  }

  paymobile4(){
    $(".toggle4").toggle('slow');
    $( ".toggle1" ).hide();
    $( ".toggle2" ).hide();
    $( ".toggle3" ).hide();
  }
  // ticketsend(){
  //   $(".toggle_ticket").toggle('slow');  
  // }

  cardlist(){
    $(".toggle_card").toggle('slow');
    $( ".toggleClass1" ).toggleClass( "highlight" );
  }
  
 
  checkcode(){
    if(this.validate()){

    }
  }

validate(){
  console.log(this.pay)
  if(this.pay.email == '' || this.pay.email == undefined) {
    alert("Please enter your email address")
    $("#email").focus();
    return false
  }else if(this.pay.mobilenumber == '' || this.pay.mobilenumber == undefined){
    alert("Please enter valid mobile number")
    $("#mob_numb").focus();
    return false
  }else if(this.pay.code == '' || this.pay.code == undefined){
    alert("enter your other code")
    return false
  }else if(this.pay.otp== '' || this.pay.otp == undefined){
    alert("please enter your moblie number")
    $("#otp").focus();
    return false
  }
  return true
}


sendotp(){
  if(this.validate1()){
  }
}
validate1(){
  console.log(this.otp)
if(this.otp.number == ''  || this.otp.number == undefined) {
  alert("please enter your moblie number")
  $("#otp").focus();
  return false
}
return true
}

ticketsend(){
  if(this.validate2()){
    $(".toggle_ticket").toggle('slow');
    $(".input_div").hide();
  }
}

validate2(){
  console.log(this.pay)
  if(this.pay.email == '' || this.pay.email == undefined){
    alert("please enter your emailid")
    return false
  }else if(this.pay.mobilenumber == '' || this.pay.mobilenumber == undefined){
    alert("Please enter valid mobile number")
    return false
  }
  return true
}
  loginuser(){
    this.navCtrl.push(LoginPage)
  }

validate3(){
  console.log(this.paypalcash)
  if(this.paypalcash == '' || this.paypalcash == undefined){
    alert("")
    return false
  }
  return true
}

  
}
