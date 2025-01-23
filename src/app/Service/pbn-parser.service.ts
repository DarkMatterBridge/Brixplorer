import {Injectable} from '@angular/core';

import * as fs from 'fs';
import {BidMetadata} from '../models/pbn/BidMetaData';
// import * as path from 'path';

// import { canonicalizeBid } from './bridgebots/bids';
// import { fromPbnDeal } from './bridgebots/deal_utils';
// import { trickEvaluator } from './bridgebots/play_utils';


@Injectable({
  providedIn: 'root'
})
export class PbnParserService {

  constructor() {
  }

  splitPbn(filePath: string): string[][] {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const records = fileContent.split('\n*\n');
    return records.map((record) => record.split('\n').filter((line) => line !== ''));
  }

  buildRecordDict(recordStrings: string[]): Map<string,any> {
    let recordDict = new Map<string, any>();
    let i = 0;
    while (i < recordStrings.length) {
      let recordString = recordStrings[i];
      if (!recordString.startsWith('[') && !recordString.startsWith('{')) {
        i++;
        continue;
      }
      if (recordString.startsWith('{')) {
        let commentary = '';
        while (i < recordStrings.length) {
          const recordString = recordStrings[i];
          if (recordString.startsWith('[')) {
            break;
          }
          commentary += recordString + ' ';
          i++;
        }
        recordDict.set('Commentary', commentary.trim());
        continue;
      }
      if (recordString.startsWith('[') && !recordString.includes(']')) {
        let recordStringTemp = recordString;
        while (!recordStringTemp.includes(']')) {
          i++;
          recordStringTemp += recordStrings[i];
        }
        recordString = recordStringTemp;
      }
      const [key, value] = recordString.replace('[', '').replace(']', '').split(':', 2);
      const trimmedValue = value.replace('"', '').trim();
      if (key === 'Note') {
        const [number, message] = trimmedValue.split(':', 2);
        recordDict.set(`Note_${number}`, message.trim());
      } else {
        recordDict.set(key, trimmedValue);
      }
      if (key === 'Auction') {
        const auctionRecord: string[] = [];
        i++;
        while (i < recordStrings.length) {
          const auctionStr = recordStrings[i];
          if (auctionStr.includes('[')) {
            break;
          }
          auctionRecord.push(...auctionStr.split(' '));
          i++;
        }
        recordDict.set('biddingRecord', auctionRecord);
      } else if (key === 'Play') {
        const playRecord: string[][] = [];
        i++;
        while (i < recordStrings.length) {
          const playStr = recordStrings[i];
          if (playStr.includes('[') || playStr === '*') {
            break;
          }
          playRecord.push(playStr.split(' '));
          i++;
        }
        recordDict.set('playRecord', playRecord);
      } else {
        i++;
      }
    }
    return recordDict;
  }


  updateBiddingMetadata(
    bidIndex: number,
    rawBid: string,
    biddingRecord: string[],
    biddingMetadata: BidMetadata[],
    recordDict: Map<string, string>
  ) {
    if (biddingRecord.length === 0) {
      return;
    }
    if (biddingMetadata.length > 0 && biddingMetadata[biddingMetadata.length - 1].bidIndex === bidIndex - 1) {
      let bidMetadata = biddingMetadata[biddingMetadata.length - 1];
      if (rawBid === '!') {
        bidMetadata = {...bidMetadata, alerted: true};
      } else {
        const match = rawBid.match(/=([0-9]+)=/);
        if (match) {
          const noteKey = `Note_${match[1]}`;
          const explanation = recordDict.get(noteKey) || rawBid;
          if (bidMetadata.explanation) {
            bidMetadata = {...bidMetadata, explanation: `${bidMetadata.explanation} | ${explanation}`};
          } else {
            bidMetadata = {...bidMetadata, explanation};
          }
        } else {
          if (bidMetadata.explanation) {
            bidMetadata = {...bidMetadata, explanation: `${bidMetadata.explanation} | ${rawBid}`};
          } else {
            bidMetadata = {...bidMetadata, explanation: rawBid};
          }
        }
      }
      biddingMetadata[biddingMetadata.length - 1] = bidMetadata;
    } else {
      const bidMetadata: BidMetadata = {
        bidIndex: bidIndex - 1,
        bid: biddingRecord[biddingRecord.length - 1],
        alerted: false
      };
      if (rawBid === '!') {
        bidMetadata.alerted = true;
      } else {
        const match = rawBid.match(/=([0-9]+)=/);
        if (match) {
          const noteKey = `Note_${match[1]}`;
          bidMetadata.explanation = recordDict.get(noteKey) || rawBid;
        } else {
          bidMetadata.explanation = rawBid;
        }
      }
      biddingMetadata.push(bidMetadata);
    }
  }


}


// Define interfaces for the data structures used in the code
interface RecordDict {
  [key: string]: string | string[];
}

interface DealRecord {
  biddingRecord: string[];
  playRecord: string[][];
}

// Function to split a PBN file into individual board records

// Function to build a dictionary from a board record

// Function to update bidding metadata

// // Example usage
// const filePath = 'path_to_your_pbn_file.pbn';
// const records = splitPbn(filePath);
// records.forEach((record) => {
//   const recordDict = buildRecordDict(record);
//   // Process the record dictionary as needed
//   console.log(recordDict);
// });
// ```
//
