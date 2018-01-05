import { NgModule } from '@angular/core';
import { CoinListComponent } from './coin-list/coin-list';
// import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CoinListComponent],
	imports: [IonicModule],
	exports: [CoinListComponent]
})
export class ComponentsModule {}
