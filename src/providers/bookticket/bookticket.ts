import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

/*
  Generated class for the BookticketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookticketProvider {
    url: string;

    constructor(public config: ConfigProvider,public http: HttpClient) {
        console.log('Hello BookticketProvider Provider');
        this.url = config.url;
    }

    bookTicket(data) {    
        return new Promise(resolve => {
            this.http.get(this.url + `getUserTicketSoldDetail?userId=${data.UserId}&theaterIdVal=${data.theaterIdVal}&scrId=${data.screenId}&showTimeId=${data.ShowTimingId}&movieDetailsId=${data.movieDetailsId}&showDetailId=${data.showDetailId}&seatStr=${data.seatStr}&dateId=${data.dateId}&TicketPrice=${data.TicketPrice}`).map(res => res)
            // this.http.get(this.url + `getUserTicketSoldDetail?userId = ${data.UserId}&theaterIdVal = ${data.theaterIdVal}&scrId = ${data.scrId}&showTimeId = ${data.ShowTimingId}&movieDetailsId=${data.movieDetailsId}&showDetailId=${data.showDetailId}&seatStr=${data.seatStr}&dateId=${data.dateId}&TicketPrice=${data.TicketPrice}`).map(res => res)
            .subscribe(data => {
                console.log("Ticket booking response", data);
                resolve(data);  
            });
        });
    }
}
