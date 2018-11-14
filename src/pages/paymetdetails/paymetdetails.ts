import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaytmentprovProvider } from '../../providers/paytmentprov/paytmentprov';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { BookticketProvider } from '../../providers/bookticket/bookticket';
import { BookingsummaryPage } from '../bookingsummary/bookingsummary';

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
 showtimeMin: number = 2;   
 showtimeSec:any=60
   min:any
   sec:any       
   interval;
   play=true
   secinterval: number;
  constructor(public bookticketprov:BookticketProvider,public service:ServiceProvider,public paymentprov:PaytmentprovProvider,public navCtrl: NavController, public navParams: NavParams) {
  console.log(this.paymentdata)
  console.log(new Date(this.paymentdata.dateId))
  this.startTimer()
  this.secondstimer()  
  }   

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymetdetailsPage');
  }

        
decMin(){
  console.log("in min")
  this.showtimeMin= this.showtimeMin-1
  console.log(this.showtimeMin)
  if(this.showtimeMin==0){
      console.log("time out")
      alert("Time out !!")
      clearInterval(this.interval);
      clearInterval(this.secinterval)
      this.navCtrl.pop()
  }
  else{     
   
  }
}  
startTimer() {  
  console.log("in start timer")
this.play = true;

this.interval = setInterval(() => {
    
  console.log("in minute time")
  this.decMin() 
 
},30000) 

}       

secondstimer(){
  console.log("in second timer function")
this.secinterval= setInterval(() => {
      console.log("in second timer")
      if( this.showtimeSec==0){
          this.showtimeSec=60
      }
      else{
          this.showtimeSec=this.showtimeSec-1
      }
    
      },1000)
}

minTimer(){

}
pauseTimer() {
this.play = false;
clearInterval(this.interval);
}



  doPayment(){
    this.paymentprov.doPayment(this.paymentdata).then((res:any)=>{
      if(res.success){
          alert("payment res "+res)   
          
          let obj={"theaterIdVal":this.paymentdata.theaterIdVal,
          "screenId":this.paymentdata.scrId,
          "ShowTimingId":this.paymentdata.showTimeId,
          "movieDetailsId":this.paymentdata.movieDetailsId,
          "showDetailId":this.paymentdata.showDetailId,
          "seatStr":this.paymentdata.seatStr,
          "dateId":this.paymentdata.dateId,
          "UserId":this.paymentdata.userId,
          "TicketPrice":this.paymentdata.TicketPrice
        }
     this.bookticketprov.bookTicket(obj).then((res:any)=>{
       console.log("booking status response",res)
      this.navCtrl.setRoot(BookingsummaryPage)   
     })  

         
          
      }else{
          alert("something went wrong please try again")
      }   
  })
  }

 

}
