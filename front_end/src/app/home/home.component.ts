import { Component, OnInit } from '@angular/core';
import { Category } from '../services/category.interface';
import { Product } from '../services/product.interface';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categories: Category[] = [];
  selectedCategoryId: number | null=null;
  products: Product[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService){
  }
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      if (categories.length > 0) {
        this.loadProductsByCategory(categories[0].id);
      }
    });
  }

  loadProductsByCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.productService.getProductsByCategoryId(categoryId).subscribe(products => {
      this.products = products;
    });
  }

  onCategoryClick(categoryId: number){
    this.loadProductsByCategory(categoryId)
  }
}
