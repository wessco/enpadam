import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymetdetailsPage } from './paymetdetails';

@NgModule({
  declarations: [
    PaymetdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymetdetailsPage),
  ],
})
export class PaymetdetailsPageModule {}
