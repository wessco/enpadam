import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooktimePage } from './booktime';

@NgModule({
  declarations: [
    BooktimePage,
  ],
  imports: [
    IonicPageModule.forChild(BooktimePage),
  ],
})
export class BooktimePageModule {}
