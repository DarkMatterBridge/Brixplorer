import {Component, Input} from '@angular/core';
import {Deal} from '../models/Deal';
import {DealConverter} from '../Service/deal-converter';
import {HandComponent} from '../hand/hand.component';

@Component({
  selector: 'app-deal',
  imports: [
    HandComponent
  ],
  templateUrl: './deal.component.html',
  standalone: true,
  styleUrl: './deal.component.scss'
})
export class DealComponent {

  constructor(private converter: DealConverter) {
    this._deal = new Deal()
  }

  @Input()
  players = ["", "", "", ""]

  _deal: Deal

  get deal() {
    return this._deal;
  }

  @Input()
  set deal(deal: Deal) {
    this._deal = deal;
    this.distributeCards()
  }

  cards = new Array<Array<Array<string>>>();

  distributeCards() {
    this.cards = this.converter.getDirectionSuitCardsArray(this.deal);
  }

}
