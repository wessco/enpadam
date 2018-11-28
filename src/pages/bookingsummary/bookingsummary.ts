import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import * as $ from 'jquery';
import { SelectstatePage } from '../selectstate/selectstate';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the BookingsummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookingsummary',
  templateUrl: 'bookingsummary.html',
})
export class BookingsummaryPage {
    // name: any;
    // address: any;
    amount: any;
    tickets: any;
    display_date: any;
    totalamount: any;
    address1: any;
    movie_name: any;
    abc: any;
    tickettype: boolean;
    MTicket: boolean;
    Officepickup: boolean;
    toppings: {};
    arrow: any; 

    constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public service: ServiceProvider) {
        this.MTicket = false;
        this.Officepickup = false;
        this.arrow = false;
        // this.toppings={}
        this.toppings = -1;
    }

    radio_grid(){
        console.log('change');
        if(this.abc=='MTicket') {
            this.MTicket=true
            this.Officepickup=false
        } else if(this.abc=='Officepickup') {
            this.Officepickup=true
            this.MTicket=false
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BookingsummaryPage');
        this.movie_name = this.navParams.get('name');
        this.address1 = this.navParams.get('address1');
        console.log("Movie Name: ",this.movie_name);
        console.log("Address: ",this.address1);
        this.amount = this.navParams.get('amount');
        this.tickets = this.navParams.get('ticket');
        this.display_date = this.navParams.get('date');
        this.totalamount = this.amount + 129 + 110 + 19.80;
        console.log("Amount: ",this.amount, this.tickets, this.display_date)
    }


    // amountprocess(){
    //   // console.log(this.abc)
    //   this.navCtrl.push(PaymentPage)
    // }

    // presentProfileModal(){

    //   let profileModal = this.modalCtrl.create(SelectstatePage);
    //  profileModal.present();
    //   }

    amountprocess() {
        console.log("ABC Amount Process: ",this.abc);
        if(this.validate()) {
            this.navCtrl.push(PaymentPage);
        } else {
            alert("Please select ticket type");
        }
    }

    validate() {
        console.log("ABC Validate: ",this.abc);
        if(this.abc == '' || this.abc == undefined) {
            alert("Please select ticket type");
            return false
        }
        return true
    }
    
    disablelist() {
        $(".toggle").toggle('slow');
        if(this.arrow == true) {
            this.arrow = false;
        } else {
            this.arrow = true;
        }
    }
}