import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menubar],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'Brixplorer';

  constructor(private router: Router) {}

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: 'configuration'
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Bidding-System',
        icon: 'pi pi-calculator',
        command: () => {
          this.router.navigate(['/biddingSystem']);
        }
      },
      {
        label: 'Board Dealer',
        icon: 'pi pi-microsoft',
        command: () => {
          this.router.navigate(['/boardDealer']);
        }
      },
      {
        label: 'Board Storage',
        icon: 'pi pi-database',
        command: () => {
          this.router.navigate(['/boardsStorage']);
        }
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Configuration',
        icon: 'pi pi-cog',
        command: () => {
          this.router.navigate(['/configuration']);
        }

      }
    ]
  }
}
