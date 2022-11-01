import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../services/products.service";
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Almacena los productos traidos de la API
  products: Product[] = []
  // Paginación de las consultas a la API
  limit: number = 10;
  offset: number = 0;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // Obtener productos desde la API
    this.productsService.getProducts(10, 0)
    .subscribe(data => {
      this.products = data;
    });
  }

  // Obtener productos desde la API
  onLoadMore() {
    this.productsService.getProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

}
