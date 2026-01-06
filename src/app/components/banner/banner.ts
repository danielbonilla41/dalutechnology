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
    { image: 'banner/1.webp', title: 'Mouse Pad Xl', subtitle: 'Carga tu smartphone o dispositivo compatible Qi mientras juegas o trabajas' },
    { image: 'banner/2.webp', title: 'Kit 4 Ventiladores Rgb Y Argb + Hub + Control', subtitle: 'Diseñados como coolers de alto rendimiento para una disipación de calor superior' },
    { image: 'banner/4.webp', title: 'Soporte Para Tarjeta Grafica', subtitle: 'El accesorio ideal para mantener tu GPU protegida, estable y con un estilo gamer espectacular' },
    { image: 'banner/3.webp', title: 'Disipador De Calor Ssd M.2', subtitle: 'Mantén tu SSD siempre fresco y con estilo gamer' }
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