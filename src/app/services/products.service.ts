import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { CreateProductDTO, Product, UpdateProductDTO } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  // Obtener los productos desde la API
  getProducts(limit?: number, offset?: number) {
    let params = new HttpParams();

    if (limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // Obtener un producto por su ID desde la API
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Crear un producto en la API
  create(productData: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, productData);
  }

  // Actualizar un producto en la API por su ID
  update(id: string, productData: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, productData);
  }

  // ELiminar un producto de la API por su ID
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
