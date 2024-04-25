import { Component, OnInit } from '@angular/core';
import { Category } from '../services/category.interface';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  categories: Category[] = [];
  newCategory: Category = { id: 0, name: '' };

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  createCategory(): void {
    if (this.newCategory.name.trim()) {
      this.categoryService.createCategory(this.newCategory)
        .subscribe(category => {
          this.categories.push(category);
          this.newCategory.name = '';
        });
    }
  }
}
