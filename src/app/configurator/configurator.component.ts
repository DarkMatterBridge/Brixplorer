import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configurator',
  imports: [CheckboxModule, CardModule, InputNumberModule, FormsModule],
  templateUrl: './configurator.component.html',
  standalone: true,
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {
  automaticSaving: boolean = false;
  savingIntervalInSeconds: number = 20;

}
