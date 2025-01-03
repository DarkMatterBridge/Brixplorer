import { Routes } from '@angular/router';
import {ConfiguratorComponent} from './configurator/configurator.component';
import {BiddingSystemComponent} from './bidding-system/bidding-system.component';

export const routes: Routes = [
  {path: 'configuration', component: ConfiguratorComponent},
  {path: 'biddingSystem', component: BiddingSystemComponent},

];
