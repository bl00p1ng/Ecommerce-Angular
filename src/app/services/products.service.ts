import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // Obtener los productos desde la API
  getProducts() {
    return this.http.get<Product[]>('https://young-sands-07814.herokuapp.com/api/products/')
  }
}
