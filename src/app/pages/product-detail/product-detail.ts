import { Component, inject, signal, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import { OrderModal } from '../../components/order-modal/order-modal';
import localeEsCo from '@angular/common/locales/es-CO';
registerLocaleData(localeEsCo, 'es-Co');

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, OrderModal],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  
  product = signal<Product | undefined>(undefined);
  loading = signal(true);
  quantity = signal(1);
  totalPrice = signal(0);
  showModal = signal(false);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (data) => {
          this.product.set(data);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
     this.totalPrice.set(this.product()?.price || 0);
  }

  addToCart() {
    console.log('Producto añadido al carrito local');
    // Aquí conectaremos luego con el CartService
  }

  goToMercadoLibre() {
    const productLink = this.product()?.linkMeli;
    window.open(`${productLink}`, '_blank');
  }

  orderCashOnDelivery() {
    const message = `Hola, quiero pedir el producto: ${this.product()?.name} con pago contra entrega.`;
    const whatsappUrl = `https://wa.me/573142146991?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  updateQty(value: number) {
    const newQty = this.quantity() + value;
    if (newQty >= 1) {
      this.quantity.set(newQty);
      const total = (this.product()?.price || 0) * newQty;
      this.totalPrice.set(total);
    }
  }
}
