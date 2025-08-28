import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { DiveSiteService } from '../../shared/dive-site-service'
// import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'
import { Map } from '../map/map.component'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DiveSearchComponent } from './../../dive-search-input.component'

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { LocationsDataService } from './../../../../core/services/locations-data-.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-container',
  imports: [Map,NzIconModule, NzLayoutModule, NzMenuModule, DiveSearchComponent, NzGridModule, NzDividerModule],
  templateUrl: './map-container.template.html',
  styleUrl: './map-container.css'
})
export class MapContainer implements OnInit {
  isCollapsed = false;
  currentVariableValue?: string;
  private subscription?: Subscription;

  constructor(protected locationsDataService: LocationsDataService){

  }

  ngOnInit(): void {
      console.log("ngOnInit() - MapContainer")


      this.subscription = this.locationsDataService.locationsData$.subscribe(value => {
        this.currentVariableValue = value;
        console.log('Variable changed to:', value);
        // Perform other actions based on the new value
      });

      setTimeout(()=>{
        this.changeValue()
      }, 5000)
      this.locationsDataService.locationsData$
  }


  changeValue(): void {
    const newValue = 'new value ' + Math.random().toFixed(2);
    this.locationsDataService.updateMyVariable(newValue);
  }

}