import { Injectable } from '@angular/core';
import {ConfigurationService} from '../configuration.service';

@Injectable({
  providedIn: 'root'
})
export class Dealer {

  constructor(private confugartionService: ConfigurationService) { }


}
