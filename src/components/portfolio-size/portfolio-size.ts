import { Component } from '@angular/core';

/**
 * Generated class for the PortfolioSizeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'portfolio-size',
  templateUrl: 'portfolio-size.html'
})
export class PortfolioSizeComponent {

  text: string;

  constructor() {
    console.log('Hello PortfolioSizeComponent Component');
    this.text = 'porfolio';
  }

}
