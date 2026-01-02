import { Routes } from '@angular/router';
import { Home } from '../app/pages/home/home';
import { ProductDetail } from '../app/pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '', // Ruta raíz
    component: Home,
    title: 'Tienda Online - Inicio'
  },
  {
    path: 'product/:id',
    component: ProductDetail,
    title: 'Tienda Online - Detalle del Producto'
  },
  {
    path: '**', // Redirige cualquier ruta desconocida al inicio
    redirectTo: '',
    pathMatch: 'full'
  }
];