import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  // Usamos una señal para almacenar los productos
  products = signal<Product[]>([]);

  getProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe(data => {
      this.products.set(data);
    });
  }
}
