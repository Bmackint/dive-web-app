import { Routes } from '@angular/router';
import { Map } from './pages/map/map.component.';
import { MapContainer } from './pages/map-container/map-container.component';

export const MAP_ROUTES: Routes = [
  { path: '', component: MapContainer },
];
