import { Injectable, signal } from '@angular/core';
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
      oldPrice: 179999,
      description: this.getDescription(5),
      image: 'img/DALU_P011_3.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-2102530108-kit-4-ventiladores-rgb-y-argb-hub-control-_JM'
    },
    {
      id: 6,
      name: 'Soporte Para Tarjeta Grafica Argb Uphere',
      price: 56999,
      oldPrice: 110000,
      description: this.getDescription(6),
      image: 'img/DALU_P004_02.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1431487755-soporte-para-tarjeta-grafica-argb-uphere-_JM'
    },
    {
      id: 7,
      name: 'Pasta Térmica Disipador De Calor Maxtor Ctg8, 4g + Cleanser',
      price: 18950,
      oldPrice: 42950,
      description: this.getDescription(7),
      image: 'img/DALU_P001_2.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1411308641-pasta-termica-disipador-de-calor-maxtor-ctg8-4g-cleanser-_JM'
    },
    {
      id: 8,
      name: 'Disipador De Calor Ssd M.2 Argb 5v 3 Pines Nvme Ngff Radiado',
      price: 21950,
      oldPrice: 45000,
      description: this.getDescription(8),
      image: 'img/DALU_P008_2.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-2777299782-disipador-de-calor-ssd-m2-argb-5v-3-pines-nvme-ngff-radiado-_JM'
    },
    {
      id: 4,
      name: 'Kit 3 Ventiladores Argb 120 Mm 5v + Pwm, Fan Building Block',
      price: 119000,
      oldPrice: 199999,
      description: this.getDescription(4),
      image: 'img/DALU_P007_2.webp'
    },
    {
      id: 1,
      name: 'Cinta Correa Velcro Organizador De Cables X50 Unidades (MULTICOLOR)',
      price: 13999,
      oldPrice: 24999,
      description: this.getDescription(1),
      image: 'img/DALU23_P003_2_MULTICOLOR.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1372236733-cinta-correa-velcro-organizador-de-cables-x50-unidades-_JM'
    },
    {
      id: 2,
      name: 'Cinta Correa Velcro Organizador De Cables X50 Unidades (NEGRO)',
      price: 13999,
      oldPrice: 24999,
      description: this.getDescription(1),
      image: 'img/DALU23_P003_2_NEGRO.webp',
      linkMeli: 'https://articulo.mercadolibre.com.co/MCO-1372236733-cinta-correa-velcro-organizador-de-cables-x50-unidades-_JM'
    },
    {
      id: 3,
      name: 'Cinta Correa Velcro Organizador De Cables X50 Unidades (ROJO)',
      price: 13999,
      oldPrice: 24999,
      description: this.getDescription(1),
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

  getDescription(id: number) {
    switch (id) {
      case 1:
        return `Correas autoadhesivas reutilizables con velcro de Nailon para organizar cables en Casa, Oficina, o a nivel industrial (Cableado estructurado).

CARACTERÍSTICAS GENERALES
• Material: Nailon (Nylon).
• Tipo de Sujeción: Velcro (Correas autoadhesivas).
• Tamaño: 150 x 12 mm

Tu compra incluye (Multicolor):
• 10 piezas color NEGRO
• 10 piezas color VERDE
• 10 piezas color AZUL
• 10 piezas color BLANCO
• 10 piezas color ROJO

Tu compra incluye (Un color):
• 50 piezas del color seleccionado.`;
      case 4:
        return `El Kit de 3 Ventiladores ARGB LC-D120 ofrece un excelente rendimiento de refrigeración y un diseño gamer moderno. Cada ventilador de 120 x 120 x 25 mm cuenta con 16 luces LED ARGB direccionables de 5V, que brindan efectos de iluminación personalizables y sincronizables con placas base compatibles.

Fabricados con rodamientos hidráulicos, garantizan una vida útil de hasta 40.000 horas y un funcionamiento silencioso. Su velocidad varía entre 600 y 1600 RPM, con un flujo de aire de 63 CFM y un nivel de ruido de solo 13 a 29 dBA.

Incluye todo lo necesario para una instalación rápida: tres ventiladores, doce tornillos de montaje, un conector PWM de 4 pines y un cable de conexión RGB de 3 pines. Es compatible con sistemas ARGB de 5V 3 pines, ideal para gabinetes y PC gamer que buscan refrigeración eficiente y estética RGB.

Especificaciones técnicas:
Modelo: LC-D120
Tamaño: 120 x 120 x 25 mm
Interfaz: 5V ARGB 3 pines + PWM 4 pines
Cantidad de LED: 16
Velocidad: 600 - 1600 RPM (±10%)
Flujo de aire: 63 CFM (±10%)
Presión estática: 2.06 mmH2O (±10%)
Ruido: 13 - 29 dBA (±10%)
Voltaje del ventilador: 12V DC
Voltaje de iluminación: 5V DC
Número de aspas: 11
Rodamientos: Hidráulicos
Vida útil: 40.000 horas
Longitud del cable: 600 mm (±10%)

Contenido del paquete:
3 ventiladores ARGB 120 mm
12 tornillos de montaje
1 conector PWM 4 pines
1 cable conexión RGB 3 pines

Ventajas del producto:

Refrigeración potente con bajo nivel de ruido

Iluminación ARGB sincronizable (5V 3 pines)

Compatible con placas base ASUS, MSI, Gigabyte, ASRock y más

Diseño gamer con acabado moderno

Instalación sencilla y durabilidad extendida`;
      case 5:
        return `Kit 4 Ventiladores RGB 120mm para PC Gamer con Hub Controladora y Control Remoto | Cooler Alto Flujo
El kit de refrigeración esencial para PC Gamer! Garantiza temperaturas óptimas y transforma tu setup con una iluminación RGB totalmente personalizable.

Características Principales
Kit 4 en 1 Expandible: Incluye 4 ventiladores 120mm RGB y un potente Hub Controladora (capacidad para 10 ventiladores 6 pines).

Control Total Inalámbrico: Mando a distancia RF para ajustar velocidad, brillo y 360 modos de luz sin abrir el gabinete.

Enfriamiento de Alto Flujo (34 CFM): Diseñados como coolers de alto rendimiento para una disipación de calor superior.

Operación Ultra Silenciosa (21 dBA): Diseño optimizado con almohadillas antivibración para reducir el ruido de resonancia.

Beneficios del Producto
Rendimiento y Estabilidad: Ayuda a mantener las temperaturas óptimas de CPU y GPU, previniendo el thermal throttling y prolongando la vida de tus componentes.

Personalización Ilimitada: 360 modos de luz para crear el ambiente perfecto en tu setup gamer (Arco Iris, Estático, Ciclismo, etc.).

Instalación Sencilla y Limpia: El Hub Controladora centraliza la conexión de hasta 10 Coolers PC, simplificando la gestión de cables.

Fácil Upgrade: La controladora incluye puerto para conexión ARGB externa (cable no incluido) para futuras sincronizaciones.

Ideal para
PC Gamers y Entusiastas: Quienes buscan combinar un alto flujo de aire con una estética impactante.

Modding y Customizacion: Usuarios que desean personalizar completamente la iluminación de su gabinete.

Workstations de Alto Rendimiento: Equipos que generan mucho calor y requieren refrigeración eficiente y silenciosa.

Upgrades y Nuevos Ensambles: Como solución completa y expandible de ventiladores 120mm para cualquier torre.

Especificaciones Técnicas (Por Ventilador)

Tipo de Producto, Cooler PC 120mm RGB
Interfaz de Conexión, 6 Pines (Al Hub)
Velocidad, 1200 RPM ±10%
Flujo de Aire (CFM), 34 CFM ±10%
Nivel de Ruido, 21 dBA ±10%
Voltaje Nominal, 12 V CC
Potencia Nominal, 1.3-2.5W
Expansión, Hub hasta 10 Ventiladores

Contenido del Paquete:
4 x Ventiladores de refrigeración 120mm
1 x Hub Controladora
1 x Control Remoto Inalámbrico RF
16 x Tornillos de montaje`;
      case 6:
        return `Soporte ajustable para tarjeta gráfica con iluminación ARGB sincronizable, resistente y fácil de instalar.

Soporte GPU ARGB Gamer upHere – Blanco 5V 3PIN | Ajustable y resistente

El Soporte para Tarjeta Gráfica ARGB upHere es el accesorio ideal para mantener tu GPU protegida, estable y con un estilo gamer espectacular. Fabricado con materiales de alta calidad, ofrece soporte sólido y compatibilidad total con iluminación ARGB de 5V y 3 pines, perfecta para sincronizar con tu setup.

Características principales:

Estructura resistente: Fabricado en hierro reforzado para ofrecer máxima durabilidad y evitar que la GPU se doble o se hunda.

Iluminación ARGB 5V: Sincronizable con placas base ASUS Aura Sync, MSI Mystic Light, Gigabyte RGB Fusion y ASRock Polychrome, brindando efectos de luz personalizables.

Ajuste deslizante: Permite un ajuste de altura y longitud adaptable a distintas tarjetas gráficas y carcasas.

Diseño gamer: Estilo moderno y limpio que combina perfectamente con setups RGB/ARGB o minimalistas.

Fácil instalación: Incluye todos los elementos necesarios para su montaje rápido y seguro.

Especificaciones técnicas:

Marca: upHere

Modelo: Soporte GPU ARGB

Tamaño: 27 cm

Material: Hierro reforzado

Interfaz: 5V 3PIN ARGB

Compatibilidad: Placas base con conector ARGB 5V 3 pines

Tipo de ajuste: Deslizante

Función: Soporte de tarjeta gráfica / Antiflexión

Beneficios del producto:

-Protege tu tarjeta gráfica de daños por peso o deformación.
-Mejora la estética del PC con efectos ARGB personalizables.
-Compatible con las principales marcas de hardware.
-Diseño moderno que complementa setups gamer profesionales.

Ideal para:

Gamers, creadores de contenido, entusiastas del hardware y constructores de PC que buscan un equilibrio entre rendimiento, protección y diseño.

Convierte tu PC en una obra maestra visual con el soporte GPU ARGB upHere. Estabilidad, estilo y sincronización RGB en un solo accesorio.`;
      case 7:
        return `Alta conductividad térmica para CPU, GPU y LED. Incluye espátula, limpiador isopropílico y pasta de 4 gramos.

La Pasta Térmica Maxtor CTG8 está diseñada para ofrecer un rendimiento térmico excepcional en sistemas de alto desempeño. Con una conductividad térmica de 12.8 W/m-K, es ideal para mantener temperaturas bajas en CPU, GPU y chips LED, garantizando estabilidad y durabilidad incluso en condiciones extremas.

Su fórmula avanzada está basada en silicona con óxidos metálicos de alta calidad, lo que permite una excelente transferencia de calor entre el procesador y el disipador. No es conductiva eléctricamente, lo que la hace totalmente segura para equipos electrónicos.

La Maxtor CTG8 es la opción preferida por gamers, técnicos y entusiastas del overclocking, ya que no requiere curado y mantiene su efectividad durante más de 5 años de uso.

Además, este kit incluye todo lo necesario para una aplicación limpia y precisa: espátula de aplicación, toalla de limpieza con alcohol isopropílico y jeringa de pasta térmica de 4 gramos.

Características destacadas

Conductividad térmica: 12.8 W/m-K
Compatible con CPU, GPU, LED y chips electrónicos
No es conductiva eléctricamente
Alta estabilidad a temperaturas extremas (-50°C a 270°C)
Ideal para overclocking y sistemas de alto rendimiento
Sin curado, lista para aplicar
Vida útil de hasta 5 años
Incluye espátula y limpiador isopropílico

Especificaciones técnicas

Modelo: CTG8
Marca: Maxtor
Tipo: Grasa térmica
Color: Gris
Conductividad térmica: > 12.8 W/m-K
Temperatura de operación: -40°C a +250°C
Temperatura máxima: hasta 270°C
Voltaje de ruptura: > 5.0 Kv/mm
Pérdida por evaporación (200°C, 24h): < 1.0%
Certificaciones: REACH / RoHS / MSDS

Contenido del paquete

1 Pasta térmica Maxtor CTG8 (4 gramos)
1 Espátula para aplicación
1 Toalla con alcohol isopropílico limpiador electrónico

Ventajas del producto

Mejora la transferencia de calor y el rendimiento del sistema
Prolonga la vida útil de los componentes electrónicos
Fácil de aplicar y limpiar
Ideal para computadoras gamer, laptops y consolas
Alta durabilidad y rendimiento estable`;
      case 8:
        return `Mantén tu SSD siempre fresco y con estilo gamer.
El Disipador de Calor M.2 ARGB CM-M2A de Asiahorse está diseñado para maximizar el rendimiento y la vida útil de tu unidad SSD M.2 2280, evitando el sobrecalentamiento y añadiendo un toque espectacular a tu setup.

Características destacadas:

Disipación eficiente: estructura de aluminio de alta calidad que mejora la ventilación del SSD.

Iluminación ARGB 5V sincronizable: compatible con placas base ASUS, MSI, Gigabyte, ASRock y muchas mas.

Diseño moderno y duradero: combina aleación de aluminio, acero inoxidable y detalles en ABS.

Fácil instalación: incluye almohadilla térmica y conectores 5V 3 pines + 4 pines pequeños.

Compatibilidad universal: apto para discos NVMe y NGFF (2280).

Especificaciones técnicas:

Marca: Asiahorse

Modelo: CM-M2A

Tamaño: 73x24x15mm

Peso: 150g

Interfaz: 5V 3 pines + 4 pines pequeños

Longitud del cable: 420mm

Optimiza el rendimiento y estilo de tu PC con este disipador que no solo protege tu SSD, sino que también ilumina tu setup con efectos RGB dinámicos.`;
      default:
        return '';
    }
  }
}