
// Define the BidMetadata class
export class BidMetadata {
  // Define the properties of the class
  bidIndex: number;
  bid: string;
  alerted: boolean = false;
  explanation?: string;

  // Constructor to initialize the properties
  constructor(bidIndex: number, bid: string, alerted?: boolean, explanation?: string) {
    this.bidIndex = bidIndex;
    this.bid = bid;
    this.alerted = alerted ?? false;
    this.explanation = explanation
  }
}
