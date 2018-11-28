import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { ServiceProvider } from '../../providers/service/service';
import { OtpconformPage } from '../otpconform/otpconform';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    reg: any;
    userid: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceProvider) {
        this.reg={}
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    signup() {
        var abc=parseInt(this.reg.mobilenumber)
        console.log(abc.toString().length);
        console.log(this.reg);
      
        // this.navCtrl.push(OtpconformPage)
        if(this.validateEmail(this.reg.emailid)){
            // this.validate()

            if(this.validate()){
                this.service.checkMail(this.reg.emailid).then((res:any)=>{
                    console.log("EMail Avilability",res.map.status);                     
                    if(res.map.status==='success'){
                        this.service.submit(this.reg.fname,this.reg.lname,this.reg.emailid,this.reg.mobilenumber,this.reg.password)
                        //  this.service.signup(this.reg.emailid,this.reg.password)
                          .then((results)=> this.submit(results));
                    } else {
                        alert("EMail already registered, Try different one...!");
                    }
                })        
            }
        } else {
          alert("please enter valid emailid")
        }
    }
  
    submit(results){
        // this.navCtrl.push(OtpconformPage)                                                                                                                                                               
        console.log(results)
        console.log(results.map.status)
        if(results.map.status =='success'){
            this.userid=results.map.user_id
            localStorage.setItem('ticket_userid',this.userid)
            this.navCtrl.setRoot(OtpconformPage)
        } else {
            alert("Not Success");
        }
    }
    validate() {
        console.log(this.reg);
        if(this.reg.fname == '' || this.reg.fname == undefined){
              alert("Enter First Name")
              return false
        } else if(this.reg.lname == '' || this.reg.lname == undefined){
              alert("Enter Last name")
              return false
        } else if(this.reg.emailid == '' || this.reg.emailid == undefined){
              alert("Enter Valid Email")
              return false
        } else if(this.reg.mobilenumber== '' || this.reg.mobilenumber == undefined){
              alert("Enter Valid Mobile Number")
              return false
        } else if(this.reg.mobilenumber.toString().length!=10){
              alert("mobile number length shoud be 10 digit")
              return false
        } else if(this.reg.password == '' || this.reg.password == undefined){
              alert("please enter valid password")
              return false
        } else if(this.reg.passwordlength<6){
              alert("password length shoud be at list 6 digit")
              return false
        } else if(this.reg.conform_password == '' || this.reg.conform_password == undefined){
              alert("please enter valid conformpassword")
              return false
        } else if(this.reg.password != this.reg.conform_password){
              alert(" your Password is Don't Match")
              return false
        // }else if(this.reg.password != this.reg.conform_password){
        //   alert("please check your password")
        } else if(this.reg.check == '' || this.reg.check == undefined){
              alert("please select checkbox")
              return false
        }
        return true
    }
    validateEmail(email: string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    login(){
        this.navCtrl.push(LoginPage)
    }
    //   signup(){
        // this.navCtrl.push(HomePage)  
    //   }
}
