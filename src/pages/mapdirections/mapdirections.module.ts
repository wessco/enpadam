import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapdirectionsPage } from './mapdirections';

@NgModule({
  declarations: [
    MapdirectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapdirectionsPage),
  ],
})
export class MapdirectionsPageModule {}
