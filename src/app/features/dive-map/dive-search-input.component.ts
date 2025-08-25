import { Component, EventEmitter, Output } from '@angular/core';
import { NzInputModule  } from 'ng-zorro-antd/input'
 import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
    selector: 'dive-search-input',
    templateUrl: './dive-search-input.template.html',
    imports: [NzInputModule, NzIconModule],
   // styleUrls: ['./search-input.component.css']
})
export class DiveSearchComponent {
    searchValue: string = '';
    @Output() searchChanged = new EventEmitter<string>();

    onSearchChange(): void {
    this.searchChanged.emit(this.searchValue);
    }
}