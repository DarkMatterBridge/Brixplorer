import {Component} from '@angular/core';
import {Deal} from '../models/Deal';
import {Configuration} from '../models/Configuration';
import {NgForOf, NgIf} from '@angular/common';
import {DealComponent} from '../deal/deal.component';

@Component({
  selector: 'app-boards-storage',
  imports: [
    NgForOf,
    DealComponent,
    NgIf
  ],
  templateUrl: './boards-storage.component.html',
  standalone: true,
  styleUrl: './boards-storage.component.scss'
})
export class BoardsStorageComponent {

  ks = new Array<string>();
  deal: Deal | undefined;
  currentKay: string = '';

  constructor() {
    this.getAllBoardsFromStorage();
  }

  getAllBoardsFromStorage() {

    this.ks = new Array<string>();
    for (var key in localStorage) {
      console.log(key)
      if (key.includes('GMT')) {
        this.ks.push(key);
      }
    }
  }

  getDeal(key: string): Deal | undefined {
    this.currentKay = key;
    const json = localStorage.getItem(key)
    if (json) {
      let x = JSON.parse(json) as Deal;
      console.log(x)
      this.deal = Deal.getDeal(x)
      return x
    }
    return undefined
  }

  deleteDeal() {
    localStorage.removeItem(this.currentKay);
    this.getAllBoardsFromStorage();
  }
}

