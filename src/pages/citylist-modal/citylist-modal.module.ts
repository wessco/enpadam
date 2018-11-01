import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitylistModalPage } from './citylist-modal';

@NgModule({
  declarations: [
    CitylistModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CitylistModalPage),
  ],
})
export class CitylistModalPageModule {}
