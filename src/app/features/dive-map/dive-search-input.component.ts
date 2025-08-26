import { Component, EventEmitter, Output } from '@angular/core';
import { NzInputModule  } from 'ng-zorro-antd/input'
 import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
    selector: 'dive-search-input',
    templateUrl: './dive-search-input.template.html',
    imports: [NzInputModule, NzIconModule, NzButtonModule, NzDividerModule],
   // styleUrls: ['./search-input.component.css']
})
export class DiveSearchComponent {
    searchValue: string = '';
    @Output() searchChanged = new EventEmitter<string>();

    onSearchChange(): void {
    this.searchChanged.emit(this.searchValue);
    }
}