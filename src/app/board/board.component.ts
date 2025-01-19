import { Component } from '@angular/core';
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

  // @ViewChildren(ConditionEntryComponent) entries: QueryList<ConditionEntryComponent> | undefined
  // subject = new Subject<null>()
  deal: Deal = new Deal()
  // generated = false
  // recentTries = 0
  // busy = false
  // maxTries = 10000000
  players = ["Adam", "Bree", "Cie", "Dora", "Emil"]

}
