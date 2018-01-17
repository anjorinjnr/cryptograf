import { Component } from '@angular/core';

/**
 * Generated class for the TopPicksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'top-picks',
  templateUrl: 'top-picks.html'
})
export class TopPicksComponent {

  text: string;

  constructor() {
    console.log('Hello TopPicksComponent Component');
    this.text = 'Hello World';
  }

}
