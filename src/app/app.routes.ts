import { Routes } from '@angular/router';
import { Albums } from './albums/albums';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: 'artists',
    component: Home,
    children: [{ path: ':id', component: Albums }],
  },
  {
    path: '**',
    redirectTo: 'artists',
  },
];
