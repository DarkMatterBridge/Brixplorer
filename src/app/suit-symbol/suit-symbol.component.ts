import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-suit-symbol',
  imports: [],
  templateUrl: './suit-symbol.component.html',
  standalone: true,
  styleUrl: './suit-symbol.component.scss'
})
export class SuitSymbolComponent {

  static symbols = ['♣', '♦', '♥', '♠', 'NT'];

  _suitNo = -1;

  get suitNo(): number {
    return this._suitNo;
  }

  @Input()
  set suitNo(value: number) {
    this._suitNo = value;
    this.handleSuitNo();
  }

  class = '';
  symbol: string | undefined;

  handleSuitNo(): void {
    if (this.suitNo === 1 || this.suitNo === 2) {
      this.class = 'red';
    }
    if (this.suitNo === 0 || this.suitNo === 3) {
      this.class = 'blue';
    }
    if (this.suitNo === 4) {
      this.class = 'black';
    }
    this.symbol = SuitSymbolComponent.symbols[this.suitNo];
  }


}
