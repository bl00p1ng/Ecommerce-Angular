import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  // Obtener los productos desde la API
  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Obtener un producto por su ID desde la API
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
