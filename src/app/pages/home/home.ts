import { Component, inject, OnInit, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProductService } from '../../services/product-service';
import { Banner } from '../../components/banner/banner';
import { RouterLink } from '@angular/router';
import localeEsCo from '@angular/common/locales/es-CO';
registerLocaleData(localeEsCo, 'es-Co');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Banner, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [{ provide: LOCALE_ID, useValue: 'es-Co' }]
})
export class Home implements OnInit {
public productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts();
  }
}