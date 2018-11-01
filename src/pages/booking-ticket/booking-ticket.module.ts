import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingTicketPage } from './booking-ticket';

@NgModule({
  declarations: [
    BookingTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingTicketPage),
  ],
})
export class BookingTicketPageModule {}
