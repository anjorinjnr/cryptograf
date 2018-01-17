import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMoreCoinModalPage } from './add-more-coin-modal';

@NgModule({
  declarations: [
    AddMoreCoinModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMoreCoinModalPage),
  ],
})
export class AddMoreCoinModalPageModule {}
