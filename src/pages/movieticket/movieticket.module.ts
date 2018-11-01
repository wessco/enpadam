import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieticketPage } from './movieticket';

@NgModule({
  declarations: [
    MovieticketPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieticketPage),
  ],
})
export class MovieticketPageModule {}
