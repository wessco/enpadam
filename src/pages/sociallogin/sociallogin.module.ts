import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialloginPage } from './sociallogin';

@NgModule({
  declarations: [
    SocialloginPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialloginPage),
  ],
})
export class SocialloginPageModule {}
