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
    { image: 'banner/2.webp', title: 'Nueva Colección', subtitle: 'Lo último en tecnología' },
    { image: 'banner/4.webp', title: 'Accesorios Premium', subtitle: 'Calidad garantizada' },
    { image: 'banner/1.webp', title: 'Grandes Ofertas', subtitle: 'Hasta 30% de descuento' },
    { image: 'banner/3.webp', title: 'Accesorios Premium', subtitle: 'Calidad garantizada' }
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