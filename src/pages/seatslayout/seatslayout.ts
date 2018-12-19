import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { BookingTicketPage } from '../booking-ticket/booking-ticket';
import { BookingsummaryPage } from '../bookingsummary/bookingsummary';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { PaytmentprovProvider } from '../../providers/paytmentprov/paytmentprov';
import { PaymetdetailsPage } from '../paymetdetails/paymetdetails';
@IonicPage()
@Component({
    selector: 'page-seatslayout',
    templateUrl: 'seatslayout.html',
})
export class SeatslayoutPage {
    selected: any;
    selected1: any;
    selected2: any;
    color: any;
    selectedseats: any;
    amount: any;
    tickets: any;
    name: any;
    seatslayout: any;  
    display_date: any;
    selectseats: string;
    date_display: any;
    img: any;
    movie_name: any;
    address1:any;
    movie_detail: any;
    moviedetailid: any;
    screenid: any;
    showdetailid: any;
    showid: any;
    showtiming: any;
    theaterId: any;
    seatsblock: any;
    loading: any;
    datemovie: any;
    seatname: any;
    seatstatus: any;
    userid: string;
    seatname2: any;
    seatname1: any;
    showtimeMin: number = 2;   
    showtimeSec:any=60
    min:any
    sec:any
    interval;
    play=true
    secinterval: number;
    TheatreName: any;
    add_cost: number;
    amount_net: number;
    price: any;
    selectedseatsPrice: any;
    temp: number = 0;

    constructor(public paymentprov:PaytmentprovProvider, public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public loadingCtrl: LoadingController) {
        this.selectedseats=[];
        this.selectedseatsPrice=[];
    }
    ionViewDidLoad() {
        this.selectseats = localStorage.getItem('selectseats');
        console.log("Ticket User Data: " ,localStorage.getItem('ticket_userdata'));
        this.userid = JSON.parse(localStorage.getItem('ticket_userdata')).id;
        console.log(this.userid);
        console.log('IONViewDidLoad SeatslayoutPage');
        this.img = this.navParams.get('img');
        this.address1 = this.navParams.get('address1');
        this.movie_name = this.navParams.get('movie_name');
        this.TheatreName = this.navParams.get('TheatreName')
        console.log("IONViewLoad: ",this.img, this.movie_name, this.TheatreName, this.address1);
    }
    ionViewWillEnter() {
        // var abc={
        //   moviedetailid:myEvent.MovieDetailId,
        //   screenid:myEvent.ScreenId,
        //   showdetailid:myEvent.ShowDetailId,
        //   showid:myEvent.ShowId,
        //   showtiming:myEvent.ShowTimig,
        //   theaterId:TheatreId
        // }
        // this.navCtrl.push(BookingsummaryPage,abc)

        this.moviedetailid = this.navParams.get('moviedetailid')
        this.screenid = this.navParams.get('screenid')
        this.showdetailid = this.navParams.get('showdetailid')
        this.showid = this.navParams.get('showid')
        this.showtiming = this.navParams.get('showtiming')
        this.theaterId = this.navParams.get('theaterId')
        this.datemovie = this.navParams.get('datemovie')
        console.log(this.moviedetailid);
        console.log(this.screenid);
        console.log(this.showdetailid);
        console.log("Show ID:" + this.showid);
        console.log(this.showtiming);
        console.log(this.theaterId);
        console.log(this.datemovie);

        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        })

        this.loading.present();        
        this.service.theaterlayout(this.theaterId, this.screenid, this.showid, this.moviedetailid, this.showdetailid)
            .then((result) => this.handletheaterlayout(result));
    }
       
    handletheaterlayout(result) {
        this.loading.dismiss();
        this.seatsblock = result.TheatreLayout;
        console.log('SeatBlock: ', this.seatsblock);
    }

    handleticketsolddetail(result) {
        console.log(result);
        if(this.selectseats != undefined) {
            alert("Ticket Successfully Booked");
            this.navCtrl.setRoot(HomePage);
        }  
        console.log(result);
        this.loading.dismiss();
        //   if(this.selectseats!=undefined){
        //     alert("Ticket Successfully Book")
        // }
    }
   
    ticketbook() {   
        if(this.selectseats == this.selectedseats.length) {
            // this.loading = this.loadingCtrl.create({
            //     content: 'Please wait...'
            // })
            // this.loading.present();
            var Params = {
                userId: this.userid,
                theaterIdVal: this.theaterId,
                // scrId: this.screenid,
                scrId: 2,
                showTimeId: this.showid,
                movieDetailsId: this.moviedetailid,
                showDetailId: this.showdetailid,
                showTime: this.showtiming,
                seatStr: this.selectedseats.toString(),
                dateId: this.datemovie,
                TicketPrice: this.amount_net,
                movie_name: this.movie_name,
                TheatreName: this.TheatreName,
                ticketsCount: this.selectedseats.length
            }
            this.navCtrl.push(PaymetdetailsPage,{data:Params});           
            console.log("Seat Layout Parameter: " + Params);
        } else {
            alert("Please Select Atleast " + this.selectseats + " seats ");
        }
    }

    // validate(){
    //   console.log(this.display_date)
    //   if(this.display_date == ''|| this.display_date== undefined) {
    //      alert("please select date-time")
    //      return false
    //   }
    //   return true  
    // }

    selectedcolor(h) {
        console.log(h);
        this.selected = h;
    }

    selectedblock(k, p) {
        if(k.SeatActivateStatus == 3) {
            // this.isDisable == true;
            console.log("Seat Reserved Already")
        // } else if(k.selectedseats == true) {
        //     this.selectedseats == false;
        //     console.log(this.selectedseats);
        } else {
            console.log("K: ",k);
            // this.selectedseats.push(k)
           // console.log(this.selectedseats)
            // this.selected1=k       
            var index = this.selectedseats.indexOf(k.seatName);
            console.log("INDEX: ",index);
            if (index > -1) {
                this.selectedseats.splice(index, 1);
                // console.log("Selected Seats: ", this.selectedseats.splice(index, 1));
            } else {
                console.log("Else: ");
                if(this.selectedseats.length < this.selectseats) {
                    this.selectedseats.push(k.SeatName);
                    console.log("KS: ",this.selectedseats);
                    this.selectedseatsPrice.push(p);
                    // console.log("SSP: ",this.selectedseatsPrice);
                    // console.log("Selected Seats: ",this.selectedseats.toString());
                    // if(this.selected)
                    // let seatTemp = 0;
                    // for(let i=0; i < this.selectedseats.length; i++) {
                    //     seatTemp = this.selectedseats[i];
                    //     console.log("seatTEMP: ", seatTemp);
                    // }
                    // if(seatTemp == seatTemp) {
                    //     console.log("NO");
                    // } else { console.log("YES"); }
                    let temp = 0;
                    for(let i=0; i < this.selectedseatsPrice.length; i++) {
                        temp = temp + this.selectedseatsPrice[i];
                        console.log("TEMP: ", this.selectedseatsPrice[i]);
                    }
                    this.amount = temp;
                    console.log(temp);
                    this.add_cost = this.selectedseats.length * 2;
                    console.log(this.add_cost);
                    this.amount_net = this.amount + this.add_cost;
                    console.log(this.amount_net);
                    this.tickets = this.selectedseats.length;
                } else {
                    alert("Maximum Seats Selected");
                }
            }
            console.log("Before Pay: ", this.selectedseats.length, this.amount);
        }              
    }

    isInclude(chk_seats) {
        var hh = this.selectedseats.includes(chk_seats);
        // hh = !hh;
        return hh;
    }

    back_btn() {
        this.navCtrl.push(BookingTicketPage);
    }

    popup() {
        this.navCtrl.push(PopoverPage);
    }
}
