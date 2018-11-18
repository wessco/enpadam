import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { BookingTicketPage } from '../booking-ticket/booking-ticket';
import { BookingsummaryPage } from '../bookingsummary/bookingsummary';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../home/home';
import { PaytmentprovProvider } from '../../providers/paytmentprov/paytmentprov';
import { PaymetdetailsPage } from '../paymetdetails/paymetdetails';

/**
 * Generated class for the SeatslayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    amount: number;
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
    constructor(public paymentprov:PaytmentprovProvider,public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public loadingCtrl: LoadingController){
        this.selectedseats=[]      
        
    }
    ionViewDidLoad() {
        this.selectseats = localStorage.getItem('selectseats');
        console.log("ticket user data",localStorage.getItem('ticket_userdata'))
        this.userid=JSON.parse(localStorage.getItem('ticket_userdata')).id;
        console.log(this.userid )
        console.log('ionViewDidLoad SeatslayoutPage');
        this.img=this.navParams.get('img');
        this.address1=this.navParams.get('address1');
        this.movie_name=this.navParams.get('movie_name');
        this.TheatreName=this.navParams.get('TheatreName')
        console.log(this.img,this.movie_name, this.TheatreName,this.address1);
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

        this.moviedetailid=this.navParams.get('moviedetailid')
        this.screenid=this.navParams.get('screenid')
        this.showdetailid=this.navParams.get('showdetailid')
        this.showid=this.navParams.get('showid')
        this.showtiming=this.navParams.get('showtiming')
        this.theaterId=this.navParams.get('theaterId')
        this.datemovie=this.navParams.get('datemovie')
        console.log(this.moviedetailid)
        console.log(this.screenid)
        console.log(this.showdetailid)
        console.log("Show ID:" + this.showid)
        console.log(this.showtiming)
        console.log(this.theaterId)
        console.log(this.datemovie)

        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        })

        this.loading.present();

        
        this.service.theaterlayout(this.theaterId, this.screenid, this.showid, this.moviedetailid, this.showdetailid)
        .then((result)=> this.handletheaterlayout(result));
    }
       
    handletheaterlayout(result){
        this.loading.dismiss();
        console.log('main result',result);
        let theaterdata=result.TheatreLayout[0]
        this.seatname=result.TheatreLayout[0].ScreenCategoryDetail[0].ScreenStatus[0].SeatName;
        //this.seatname=result.TheatreLayout[0]. ScreenCategoryDetail[0].ScreenStatus[0].SeatNameStr;
        console.log('Main Filter',result.TheatreLayout[0]);
        console.log('Filter Result Seat Name',this.seatname);

        this.seatname1=result.TheatreLayout[0].CategoryName.Price;
        console.log('Filter Result Seat Name 1',this.seatname1);

        this.seatname2=result.TheatreLayout[0].ScreenCategoryDetail[0].ScreenStatus[0].SeatStatus;
        console.log(this.seatname2);
         this.amount=theaterdata.Price
        
        // console.log(result.TheatreLayout)
        this.seatsblock=result.TheatreLayout;
        console.log(this.seatsblock);
        // console.log(this.seatsblock[0].ScreenStatus[0].SeatNameStr)
    }

    handleticketsolddetail(result) {
        console.log(result);
        if(this.selectseats!=undefined) {
            alert("Ticket Successfully Book.");
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
                theaterIdVal:   this.theaterId,
                scrId: this.screenid,
                showTimeId: this.showid,
                movieDetailsId:this.moviedetailid,
                showDetailId:this.showdetailid,
                showTime:this.showtiming,
                seatStr:this.selectedseats.toString(),
                dateId:this.datemovie,
                TicketPrice:this.amount,
                movie_name:this.movie_name,
                TheatreName:this.TheatreName,
                ticketsCount:this.selectedseats.length
            }          
      
            this.navCtrl.push(PaymetdetailsPage,{data:Params})
           
            console.log("Seat Layout Parameter: " + Params);
        } else {
            alert("Please Select Atleast " + this.selectseats + " seats ");
        }
    }      

    // validate(){
    //   console.log(this.display_date)
    //   if(this.display_date == ''|| this.display_date== undefined) {
    //     alert("please select date-time")
    //     return false
    //   }
    //   return true  
    // }

    selectedcolor(h) {
        console.log(h);
        this.selected=h;
    }

    selectedblock(k) {

        if(k.SeatActivateStatus==3){
            console.log("seat booked already")
        }else{
            console.log(k);
            // this.selectedseats.push(k)
           // console.log(this.selectedseats)
            // this.selected1=k
       
            var index = this.selectedseats.indexOf(k.seatName);
            console.log(index);
            if (index > -1) {
                this.selectedseats.splice(index, 1);
                console.log(this.selectedseats);
            } else {
                console.log("in else")
                if(this.selectedseats.length < this.selectseats) {
                this.selectedseats.push(k.SeatName);
                console.log(this.selectedseats.toString());
                this.amount=this.selectedseats.length * this.amount;
                console.log(this.amount)   
                this.tickets=this.selectedseats.length;
                } else {
                    alert("you have selected maximum seats");
                }  
            }    
               console.log("before pay",this.selectedseats.length,this.amount)
    
        }
              
    }
 
    // removeselected(){
    //   var index = this.selectedseats.indexOf(5);
    //   if (index > -1) {
    //     this.selectedseats.splice(index, 1);
    //   }

    // }

    selectedblockgold(v) {  
        if(v.SeatActivateStatus==3){  
   console.log("seat booked already")
        }else {  
            console.log(v)
            // this.selected2=v
    
            var index = this.selectedseats.indexOf(v);
            console.log(index);
            if (index > -1) {
                this.selectedseats.splice(index, 1);
                console.log(this.selectedseats)
            } else {
                this.selectedseats.push(v.SeatName)  
                console.log(this.selectedseats)
            }
            console.log(this.selectedseats.length);
          
            this.amount=this.selectedseats.length* this.amount;
            this.tickets=this.selectedseats.length;
             
        }
           }

    isInclude(chk_seats) {
        // console.log(chk_seats)
        var hh=this.selectedseats.includes(chk_seats);

        return hh;   
    }

    back_btn() {
        this.navCtrl.push(BookingTicketPage);
    }

    popup() {
        this.navCtrl.push(PopoverPage);
    }

    // ticketbook(){
    //   var d = new Date(this.display_date);
    //   console.log(this.display_date)
    //   var total_amt={
    //     amount:this.amount,
    //     ticket:this.tickets,
    //     date:d 
    //   }
    //   this.navCtrl.push(BookingsummaryPage,total_amt)
    // }
}
