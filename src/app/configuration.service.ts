import {Injectable} from '@angular/core';
import {Configuration} from './models/Configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _config: Configuration

  get config(): Configuration {
    return this._config;
  }

  set config(value: Configuration) {
    this._config = value;
    this.setTolocalStorage();
  }

  constructor() {
    this._config = this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    const json = localStorage.getItem("Configuration");
    if (json) {
      this._config = JSON.parse(json) as Configuration;
    } else
      this._config = new Configuration(false, 20, false, 100, 1000000);
    return this.config;
  }

  setTolocalStorage() {
    localStorage.setItem("Configuration", JSON.stringify(this._config));
  }

}

