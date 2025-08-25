import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DiveSearchComponent } from './features/dive-map/dive-search-input.component'

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, DiveSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isCollapsed = false;
}
