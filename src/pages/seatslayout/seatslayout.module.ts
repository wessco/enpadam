import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatslayoutPage } from './seatslayout';

@NgModule({
    declarations: [
        SeatslayoutPage,
    ],
    imports: [
      IonicPageModule.forChild(SeatslayoutPage),
    ],
})
export class SeatslayoutPageModule {
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
}
