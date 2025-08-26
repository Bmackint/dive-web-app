import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/map' },
  { path: 'map', loadChildren: () => import('./features/dive-map/map.routes').then(m => m.MAP_ROUTES) }
];
