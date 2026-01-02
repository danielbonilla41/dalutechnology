import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private mockProducts: Product[] = [
    {
      id: 5,
      name: 'Kit 4 Ventiladores Rgb Y Argb + Hub + Control',
      price: 99999,
      description: 'Cooler Alto Flujo El kit de refrigeración esencial para PC Gamer! Garantiza temperaturas óptimas y transforma tu setup con una iluminación RGB totalmente personalizable.',
      image: 'img/DALU_P011_3.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-2102530108-kit-4-ventiladores-rgb-y-argb-hub-control-_JM'
    },
    {
      id: 6,
      name: 'Soporte Para Tarjeta Grafica Argb Uphere',
      price: 56999,
      description: 'El Soporte para Tarjeta Gráfica ARGB upHere es el accesorio ideal para mantener tu GPU protegida, estable y con un estilo gamer espectacular. Fabricado con materiales de alta calidad, ofrece soporte sólido y compatibilidad total con iluminación ARGB de 5V y 3 pines, perfecta para sincronizar con tu setup.',
      image: 'img/DALU_P004_02.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1431487755-soporte-para-tarjeta-grafica-argb-uphere-_JM'
    },
    {
      id: 7,
      name: 'Pasta Térmica Disipador De Calor Maxtor Ctg8, 4g + Cleanser',
      price: 18700,
      description: 'La Pasta Térmica Maxtor CTG8 está diseñada para ofrecer un rendimiento térmico excepcional en sistemas de alto desempeño. Con una conductividad térmica de 12.8 W/m-K, es ideal para mantener temperaturas bajas en CPU, GPU y chips LED, garantizando estabilidad y durabilidad incluso en condiciones extremas.',
      image: 'img/DALU_P001_2.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1411308641-pasta-termica-disipador-de-calor-maxtor-ctg8-4g-cleanser-_JM'
    },
    {
      id: 8,
      name: 'Disipador De Calor Ssd M.2 Argb 5v 3 Pines Nvme Ngff Radiado',
      price: 18700,
      description: 'El Disipador de Calor M.2 ARGB CM-M2A de Asiahorse está diseñado para maximizar el rendimiento y la vida útil de tu unidad SSD M.2 2280, evitando el sobrecalentamiento y añadiendo un toque espectacular a tu setup.',
      image: 'img/DALU_P008_2.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-2777299782-disipador-de-calor-ssd-m2-argb-5v-3-pines-nvme-ngff-radiado-_JM'
    },
    {
      id: 4,
      name: 'Kit 3 Ventiladores Argb 120 Mm 5v + Pwm, Fan Building Block',
      price: 119000,
      description: 'El Kit de 3 Ventiladores ARGB LC-D120 ofrece un excelente rendimiento de refrigeración y un diseño gamer moderno. Cada ventilador de 120 x 120 x 25 mm cuenta con 16 luces LED ARGB direccionables de 5V, que brindan efectos de iluminación personalizables y sincronizables con placas base compatibles.',
      image: 'img/DALU_P007_2.webp'
    },
    {
      id: 1,
      name: 'Cinta Correa Velcro Organizador De Cables X50 Unidades (MULTICOLOR)',
      price: 13999,
      description: 'Correas autoadhesivas reutilizables con velcro de Nailon para organizar cables en Casa, Oficina, o a nivel industrial (Cableado estructurado).',
      image: 'img/DALU23_P003_2_MULTICOLOR.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1372236733-cinta-correa-velcro-organizador-de-cables-x50-unidades-_JM'
    },
    {
      id: 2,
      name: 'Cinta Correa Velcro Organizador De Cables X50 Unidades (NEGRO)',
      price: 13999,
      description: 'Correas autoadhesivas reutilizables con velcro de Nailon para organizar cables en Casa, Oficina, o a nivel industrial (Cableado estructurado).',
      image: 'img/DALU23_P003_2_NEGRO.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1372236733-cinta-correa-velcro-organizador-de-cables-x50-unidades-_JM'
    },
    {
      id: 3,
      name: 'Cinta Correa Velcro Organizador De Cables X50 Unidades (ROJO)',
      price: 13999,
      description: 'Correas autoadhesivas reutilizables con velcro de Nailon para organizar cables en Casa, Oficina, o a nivel industrial (Cableado estructurado).',
      image: 'img/DALU23_P003_2_ROJO.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1372236733-cinta-correa-velcro-organizador-de-cables-x50-unidades-_JM'
    }
  ];

  // Usamos una señal para almacenar los productos
  products = signal<Product[]>([]);

  getProducts() {
    this.products.set(this.mockProducts);
  }

  getProductById(id: string) {
    const product = this.mockProducts.find(p => p.id === Number(id));
    return of(product);
  }
}
