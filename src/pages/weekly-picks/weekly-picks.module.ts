import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklyPicksPage } from './weekly-picks';

@NgModule({
  declarations: [
    WeeklyPicksPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklyPicksPage),
  ],
})
export class WeeklyPicksPageModule {}
