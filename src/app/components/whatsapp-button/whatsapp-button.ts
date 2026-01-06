import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  phoneNumber: string = '573142146991';

  defaultMessage: string = 'Hola, me gustaría recibir más información.';

  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
