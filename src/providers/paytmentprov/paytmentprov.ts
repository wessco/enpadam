import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';
import { ConfigProvider } from '../config/config';
declare var RazorpayCheckout: any;
/*
  Generated class for the PaytmentprovProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaytmentprovProvider {
url:any
  constructor(public config: ConfigProvider,public http: HttpClient) {
    console.log('Hello PaytmentprovProvider Provider');
    this.url=config.url
  }

doPayment(data){
  return new Promise(resolve=>{
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_oCfYA2xM5xFN9p',
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'pranav@razorpay.com',
        contact: '8879524924',
        name: 'Pranav Gupta'
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

savePaymentToApi(data){
  return new Promise((resolve,reject)=>{
this.http.get(this.url+`/userPrincingPlanInfomation?userId=${data.userId}&Amount=${data.price}`).subscribe(res=>{
  resolve(res)
})
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
