import {Component} from '@angular/core';

import {CoinTicker} from '../../models/types';

/**
 * Generated class for the CryptoPerformanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crypto-performance',
  templateUrl: 'crypto-performance.html'
})
export class CryptoPerformanceComponent {

  topPerformers: CoinTicker[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price_usd: 9990.0,
      percent_change_24h: 5.67
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price_usd: 478.21,
      percent_change_24h: 11.23
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price_usd: 82.81,
      percent_change_24h: 6.86
    }
  ];

  worstPerformers: CoinTicker[] = [
    {
      name: 'Ripple',
      symbol: 'XRP',
      price_usd: 0.26,
      percent_change_24h: -5.67
    },
    {
      name: 'Salt',
      symbol: 'SALT',
      price_usd: 478.21,
      percent_change_24h: -11.23
    },
    {
      name: 'Neo',
      symbol: 'NEO',
      price_usd: 82.81,
      percent_change_24h: -6.86
    }
  ];

  constructor() {
    console.log('Hello CryptoPerformanceComponent Component');
  }

}

//
