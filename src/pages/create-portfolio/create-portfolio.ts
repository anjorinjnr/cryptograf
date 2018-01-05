import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { Coin } from '../../models/types';

/**
 * Generated class for the CreatePortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-create-portfolio',
  templateUrl: 'create-portfolio.html',
})
export class CreatePortfolioPage {

  @ViewChild('searchbar') searchbar: Searchbar;

  shouldShowSearch: boolean = false;

  coins: Coin[] = [
    {
      name: 'BTC',
      price: 11000.41,
      delta: {
        type: '+',
        value: 8.19
      },
      holdSize: 0
    },
    {
      name: 'ETH',
      price: 600.41,
      delta: {
        type: '+',
        value: 4.12
      },
      holdSize: 0
    },
    {
      name: 'DASH',
      price: 639.41,
      delta: {
        type: '+',
        value: 18.47
      },
      holdSize: 0
    },
    {
      name: 'XRP',
      price: 11000.41,
      delta: {
        type: '+',
        value: 8.19
      },
      holdSize: 0
    },
    {
      name: 'LTC',
      price: 100.41,
      delta: {
        type: '+',
        value: 8.19
      },
      holdSize: 0
    },
    {
      name: 'IOTA',
      price: 1.46,
      delta: {
        type: '-',
        value: 8.01
      },
      holdSize: 0
    },
    {
      name: 'NEO',
      price: 37.65,
      delta: {
        type: '-',
        value: 8.19
      },
      holdSize: 0
    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleShowSearch() {
    this.shouldShowSearch = !this.shouldShowSearch;
    if (this.shouldShowSearch) {
      setTimeout(
      () => this.searchbar.setFocus(), 100);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad -- CreatePortfolioPage', this.shouldShowSearch);
  }

}
