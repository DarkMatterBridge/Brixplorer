import { Injectable } from '@angular/core';
import {Deal} from './models/Deal';

@Injectable({
  providedIn: 'root'
})
export class DealConverter {
  value = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  // inverseValue = new Map<string, number>([['2', 0], ['3', 1], ['4', 2], ['5', 3], ['6', 4], ['7', 5], ['8', 6],
  //   ['9', 7], ['T', 8], ['J', 9], ['Q', 10], ['K', 11], ['A', 12]])

  constructor() {
  }

  getDirectionSuitCardsArray(deal: Deal) : string[][][] {
    let cards: string[][][];
    cards = new Array<Array<Array<string>>>();

    for (let d = 0; d < 4; d++) {
      let sortedHand = deal.getSortedHand(d);
      cards[d] = this.getHandSuitArray(sortedHand)
    }
    return cards;
  }

  getHandSuitArray(cardsInHand: number[]): Array<Array<string>> {
    let cards = [];
    cards[0] = cardsInHand.filter(x => x < 13).map(y => this.value[y % 13])
    cards[1] = cardsInHand.filter(x => x > 12 && x < 26).map(y => this.value[y % 13])
    cards[2] = cardsInHand.filter(x => x > 25 && x < 39).map(y => this.value[y % 13])
    cards[3] = cardsInHand.filter(x => x > 38).map(y => this.value[y % 13])
    return cards;
  }

  // getDealFromIndividualCards(cards: Array<Array<Array<string>>>): Deal {
  //   const deal = new Deal()
  //   const dealCards = deal.cards
  //   let cardCounter = 0
  //   for (let d = 0; d < 4; d++) {
  //     const cardsInDirection = cards[d]
  //     for (let suit = 0; suit < 4; suit++) {
  //       const cardsInSuit = cardsInDirection[suit]
  //       const number = cardsInSuit.length
  //       for (let card = 0; card < number; card++) {
  //         dealCards[cardCounter] = this.inverseValue.get(cardsInSuit[card])! + suit * 13
  //       }
  //     }
  //   }
  //   return deal
  // }



  // constructDealStringForDDA(deal: Deal): string {
  //   const separator = 'x'
  //   let cards = this.getIndividualCards(deal)
  //   return 'W:' + this.getHandString(cards[0])
  //     + separator + this.getHandString(cards[1])
  //     + separator + this.getHandString(cards[2])
  //     + separator + this.getHandString(cards[3])
  // }


  // getHandString(cards: string[][]) {
  //   return cards[3].join("") + "." + cards[2].join("") + "." + cards[1].join("") + "." + cards[0].join("");
  // }

}
