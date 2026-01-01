import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';
import { Banner } from '../../components/banner/banner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
public productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts();
  }
}