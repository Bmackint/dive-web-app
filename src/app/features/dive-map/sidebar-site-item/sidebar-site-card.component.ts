import { Component, OnInit, model, signal  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSplitterModule } from 'ng-zorro-antd/splitter';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-sidebar-site-card',
  imports: [NzCardModule, NzButtonModule, NzFlexModule, NzSplitterModule, NzSwitchModule, NzLayoutModule,
    FormsModule
  ],
  templateUrl: './sidebar-site-card.template.html',
  styleUrl: './sidebar-site-card.css'
})
export class SideBarCard implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
    
  }

  resizable = model(true);
  sizes = signal<Array<number | string>>(['50%', '50%']);

  setSizes(sizes: Array<number | string>): void {
    console.log('output', sizes);
    this.sizes.set(sizes);
  }

}