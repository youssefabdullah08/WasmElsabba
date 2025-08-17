import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./components/blanck-layout/blanck-layout.component').then(m => m.BlanckLayoutComponent)},
];
