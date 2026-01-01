import { Routes } from '@angular/router';
import { Home } from '../app/pages/home/home';

export const routes: Routes = [
    {
    path: '', // Ruta raíz
    component: Home,
    title: 'Tienda Online - Inicio'
  },
  {
    path: '**', // Redirige cualquier ruta desconocida al inicio
    redirectTo: '',
    pathMatch: 'full'
  }
];