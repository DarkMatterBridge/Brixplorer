import { Routes } from '@angular/router';
import {ConfiguratorComponent} from './configurator/configurator.component';
import {BiddingSystemComponent} from './bidding-system/bidding-system.component';
import {BoardComponent} from './board/board.component';
import {BoardsStorageComponent} from './boards-storage/boards-storage.component';

export const routes: Routes = [
  {path: 'configuration', component: ConfiguratorComponent},
  {path: 'biddingSystem', component: BiddingSystemComponent},
  {path: 'boardDealer', component: BoardComponent},
  {path: 'boardsStorage', component: BoardsStorageComponent},

];
