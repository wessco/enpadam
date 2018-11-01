import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { map } from 'rxjs/operator/map';
import { ForgotPage } from '../forgot/forgot';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  logindata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceProvider) {
      this.logindata={}
      this.logindata.emailid='sha16jaffar@gmail.com'
      this.logindata.password ='123456'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } 

  login_success(){
    // this.navCtrl.setRoot(HomePage)
    console.log(this.logindata)
    // if(this.validateEmail(this.logindata.emailid)){
        // this.validate()

        if(this.validate()){
         this.service.login(this.logindata.emailid,this.logindata.password)
          .then((results)=> this.login(results))
        }
    // }else{
    //    alert("please enter valid emailid")
    //       }
    }

    login(results) {
        // this.navCtrl.push(HomePage)
        console.log(results)
        console.log(results.map.status)
        if(results.map.status =='success') {
            localStorage.setItem('ticket_userdata',JSON.stringify(results.map))
            this.navCtrl.setRoot(HomePage)
        } else {
            alert("Invalid Username and Password")
        }
    }

    validate() {
        console.log(this.logindata)
        if(this.logindata.emailid == '' || this.logindata.emailid == undefined) {
            alert(" please enter valid username");
            return false;
        } else if(this.logindata.password == '' || this.logindata.password == undefined) {
            alert("please enter valid password")
            return false
        }
        return true
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    forgot(){
        this.navCtrl.push(ForgotPage);
    }
    register(){
        this.navCtrl.push(RegisterPage);
    }
}
