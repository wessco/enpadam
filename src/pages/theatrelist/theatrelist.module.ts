import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheatrelistPage } from './theatrelist';

@NgModule({
  declarations: [
    TheatrelistPage,
  ],
  imports: [
    IonicPageModule.forChild(TheatrelistPage),
  ],
})
export class TheatrelistPageModule {}
