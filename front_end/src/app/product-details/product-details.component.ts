import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product!: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  
  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  } 
}
