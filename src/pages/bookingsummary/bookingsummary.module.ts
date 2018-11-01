import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingsummaryPage } from './bookingsummary';

@NgModule({
  declarations: [
    BookingsummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingsummaryPage),
  ],
})
export class BookingsummaryPageModule {}
