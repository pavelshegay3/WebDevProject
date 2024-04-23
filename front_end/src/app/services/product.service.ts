import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = 'http://127.0.0.1:8000/';
    constructor(private http: HttpClient){
    }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}products/`);
    }
    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.baseUrl}products/`, product)
    }
    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}products/${id}/`);
    }
    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}products/${id}/`);
    }
    updateProduct(id: number, product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${id}/`, product)
    }
    getProductsByCategoryId(categoryId: number): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}categories/${categoryId}/products/`)
    }
    getTopRatedProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}products/top_rated/`)
    }
}