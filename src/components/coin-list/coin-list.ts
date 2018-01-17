import { Component } from '@angular/core';
import { Coin} from '../../models/types';

/**
 * Generated class for the CoinListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'coin-list',
  templateUrl: 'coin-list.html'
})
export class CoinListComponent {

  text: string;

  coins: Coin[] = [
    {
      name: 'BTC',
      price: 11000.41,
      delta: {
        type: 'incr',
        value: 8.19
      },
      holdSize: 0
    },
    {
      name: 'ETH',
      price: 600.41,
      delta: {
        type: 'incr',
        value: 4.12
      },
      holdSize: 0
    },
    {
      name: 'DASH',
      price: 639.41,
      delta: {
        type: 'incr',
        value: 18.47
      },
      holdSize: 0
    },
    {
      name: 'XRP',
      price: 11000.41,
      delta: {
        type: 'incr',
        value: 8.19
      },
      holdSize: 0
    },
    {
      name: 'LTC',
      price: 100.41,
      delta: {
        type: 'incr',
        value: 8.19
      },
      holdSize: 0
    },
    {
      name: 'IOTA',
      price: 1.46,
      delta: {
        type: 'decr',
        value: 8.01
      },
      holdSize: 0
    },
    {
      name: 'NEO',
      price: 37.65,
      delta: {
        type: 'decr',
        value: 8.19
      },
      holdSize: 0
    }

  ];

  constructor() {
    console.log('Hello CoinListComponent Component');
  }

  itemSelected(){

  }
}
