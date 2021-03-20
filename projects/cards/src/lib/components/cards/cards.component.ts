import { Component, Input } from '@angular/core';
import { ICardItem } from '../../interfaces/card.interface';

@Component({
  selector: 'tng-cards',
  template: `
    <h1>
      Taller de librería de Angular
    </h1>
    <div class="main">
    <h2>Librería Cards Responsivas</h2>
    <ul class="cards">
      <li class="cards_item" *ngFor="let item of cardItems">
        <tng-card-item [cardItem]="item"></tng-card-item>
      </li>
    </ul>
  </div>
  `,
  styles: []
})

export class CardsComponent {
  @Input() cardItems: Array<ICardItem> = [];

  constructor() { }

}
