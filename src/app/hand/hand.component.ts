import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {SuitSymbolComponent} from '../suit-symbol/suit-symbol.component';

@Component({
  selector: 'app-hand',
  imports: [
    NgForOf,
    SuitSymbolComponent
  ],
  templateUrl: './hand.component.html',
  standalone: true,
  styleUrl: './hand.component.scss'
})
export class HandComponent {


  symbols = ['♣', '♦', '♥', '♠'].reverse();
  // suits = ['S', 'H', 'D', 'C'];

  @Input()
  cards = new Array<Array<string>>();

}
