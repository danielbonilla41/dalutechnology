import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-order-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-modal.html',
  styleUrl: './order-modal.css',
})
export class OrderModal {
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) quantity: number = 1;
  @Output() close = new EventEmitter<void>();

  formData = {
    nombre: '',
    cedula: '',
    celular: '',
    ciudad: '',
    direccion: ''
  };

  closeModal() {
    this.close.emit();
  }

  sendWhatsApp() {
    const message =
      ` *NUEVO PEDIDO - PAGO CONTRA ENTREGA* 

*Producto:* ${this.product.name}
*Cantidad:* ${this.quantity}
*Total:* $${this.product.price * this.quantity} + ENVIO

*Datos de envío:*
 *Nombre:* ${this.formData.nombre}
 *Cédula:* ${this.formData.cedula}
 *Celular:* ${this.formData.celular}
 *Ciudad:* ${this.formData.ciudad}
 *Dirección:* ${this.formData.direccion}`;

    const whatsappUrl = `https://wa.me/573142146991?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    this.closeModal();
  }
}
