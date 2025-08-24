import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/map' },
  { path: 'map', loadChildren: () => import('./pages/map/map.routes').then(m => m.MAP_ROUTES) }
];
