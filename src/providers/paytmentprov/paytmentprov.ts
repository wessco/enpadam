import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare var RazorpayCheckout: any;
/*
  Generated class for the PaytmentprovProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaytmentprovProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PaytmentprovProvider Provider');
  }

doPayment(data){
  return new Promise(resolve=>{
    var options = {
      description: 'Booking Tickets Through Ticketlite',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_live_1kzJgQOqdgLsey',  
      amount: data.TicketPrice,
      name: 'foo',
      prefill: {
        email: '',
        contact: '',
        name: ''
      },
      theme: {
        color: '#F37254'
      }
    }       
    
    RazorpayCheckout.open(options, function successCallback(payment_id){
      alert('payment_id: ' + payment_id)
      let obj ={
        success:true,
        payment_id:payment_id
      }
      resolve(obj)  
    }, function cancelCallback(error){
      alert(error.description + ' (Error '+error.code+')')
      resolve(error)
    })
  
    // var successCallback = function(payment_id) {
    //   alert('payment_id: ' + payment_id)
    //   resolve(payment_id)
    // }
           
    // var cancelCallback = function(error) {
    //   alert(error.description + ' (Error '+error.code+')')
    //   resolve(error)
    // }
  })
  
}


checkPayment(){
document.addEventListener('resume', onResume, false);
var onResume = function(event) {
        // Re-register the payment success and cancel callbacks
        RazorpayCheckout.on('payment.success', successCallback)
        RazorpayCheckout.on('payment.cancel', cancelCallback)
        // Pass on the event to RazorpayCheckout
        RazorpayCheckout.onResume(event);

        var successCallback = function(payment_id) {
          alert('payment_id: ' + payment_id)
        }
        
        var cancelCallback = function(error) {
          alert(error.description + ' (Error '+error.code+')')
        }
      };
    }
}
