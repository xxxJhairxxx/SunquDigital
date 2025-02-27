import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/pages/Home/Home.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./shared/pages/Contact/Contact.component'),
  },
];
