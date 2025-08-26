import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { DiveSiteService } from '../../shared/dive-site-service'
// import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'
import { Map } from '../map/map.component.'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DiveSearchComponent } from './../../dive-search-input.component'

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-map-container',
  imports: [Map,NzIconModule, NzLayoutModule, NzMenuModule, DiveSearchComponent, NzGridModule, NzDividerModule],
  templateUrl: './map-container.template.html',
  styleUrl: './map-container.css'
})
export class MapContainer implements OnInit {
isCollapsed = false;
    ngOnInit(): void {
        console.log("ngOnInit() - MapContainer")
    }

}