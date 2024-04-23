import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "./category.interface";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private baseUrl = 'http://127.0.0.1:8000/';
    constructor(private http: HttpClient){
    }
    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.baseUrl}categories/`);
    }
    createCategory(category: Category): Observable<Category>{
        return this.http.post<Category>(`${this.baseUrl}categories/`, category);
    }
    deleteCategory(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}categories/${id}/`);
    }
    getCategoryById(id: number): Observable<Category> {
        return this.http.get<Category>(`${this.baseUrl}categories/${id}/`);
    }
    updateCategory(id: number, category: Category): Observable<Category> {
        return this.http.put<Category>(`${this.baseUrl}categories/${id}/`, category);
    }
}