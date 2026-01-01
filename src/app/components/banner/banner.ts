import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { BannerModel } from '../../models/banner.model';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
banners = signal<BannerModel[]>([
    { image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80', title: 'Grandes Ofertas', subtitle: 'Hasta 50% de descuento' },
    { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80', title: 'Nueva Colección', subtitle: 'Lo último en tecnología' },
    { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80', title: 'Accesorios Premium', subtitle: 'Calidad garantizada' }
  ]);

  currentIndex = signal(0);
  private timer: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.next();
    }, 5000); // Cambia cada 5 segundos
  }

  next() {
    this.currentIndex.update(index => (index + 1) % this.banners().length);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

}