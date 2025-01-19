import {Component} from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration.service';
import {Configuration} from '../models/Configuration';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-configurator',
  imports: [CheckboxModule, CardModule, InputNumberModule, FormsModule, ButtonModule, NgIf],
  templateUrl: './configurator.component.html',
  standalone: true,
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {

  configuration: Configuration
  hasChanged = false

  constructor(private congigurationService: ConfigurationService) {
    this.configuration = congigurationService.config
  }

  save() {
    this.congigurationService.config = this.configuration;
    this.hasChanged = false
  }

  changed($event: any) {
    this.hasChanged = true
  }
}
