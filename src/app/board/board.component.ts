import {Component} from '@angular/core';
import {Deal} from '../models/Deal';
import {DealComponent} from '../deal/deal.component';

@Component({
  selector: 'app-board',
  imports: [
    DealComponent
  ],
  templateUrl: './board.component.html',
  standalone: true,
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  constructor() {
    this.deal.shuffleAll()
  }

  // @ViewChildren(ConditionEntryComponent) entries: QueryList<ConditionEntryComponent> | undefined
  // subject = new Subject<null>()
  deal: Deal = new Deal()
  // generated = false
  // recentTries = 0
  // busy = false
  // maxTries = 10000000
  players = ["Adam", "Bree", "Cie", "Dora", "Emil"]

  isShufflePossible() {
    return true;
  }

  shuffle() {
    this.deal.shuffleAll();
    this.deal = Deal.getDeal(this.deal) // for change detection
  }

  shuffleAllButWest() {
    this.deal.shuffleExcept(1)
    this.deal = Deal.getDeal(this.deal) // for change detection
  }
  shuffleAllButWestEast() {
    this.deal.shuffleExcept2(1,3)
    this.deal = Deal.getDeal(this.deal) // for change detection
  }


  saveBoard() {
    this.deal.save()
  }
}
