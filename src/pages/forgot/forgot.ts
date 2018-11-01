import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
    selector: 'page-forgot',
    templateUrl: 'forgot.html',
})
export class ForgotPage {
    forgot: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.forgot={}
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForgotPage');
    }

    submit(){
        console.log(this.forgot)
        // this.navCtrl.push(RegisterPage)
        if(this.validateEmail(this.forgot.emailid)) {
            // this.validate()
            if(this.validate()){
                this.navCtrl.setRoot(ForgotPage)
            }
        } else {
            alert("please enter valid emailid")
        }
    }

    validate(){
        console.log(this.forgot)
        if(this.forgot.emailid == '' || this.forgot.emailid == undefined) {
            alert("please enter valid emailid");
            return false;
        }
        return true
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    login(){
        this.navCtrl.push(LoginPage)
    }
  
}
