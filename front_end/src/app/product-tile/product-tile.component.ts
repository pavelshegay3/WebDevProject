import { Component, Input } from '@angular/core';
import { Product } from '../services/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})
export class ProductTileComponent {
  @Input() product!: Product;

  constructor(private router: Router){
  }

  navigateToProductDetails(productId: number) {
    this.router.navigateByUrl(`/products/${productId}`);
  }
  
}
