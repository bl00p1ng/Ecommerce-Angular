import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // ID de la catergoria, se ingresa por la URL
  categoryId: string | null = null;
  // Paginación de las consultas a la API
  limit: number = 6;
  offset: number = 0;
  // Almacena los productos traidos de la API
  products: Product[] = []

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Obtener el ID de la URL
      this.categoryId = params.get('id');

      // Obtener los productos asociados al Id de la categoria
      if (this.categoryId) {
        this.productsService.getByCategory(this.categoryId, 6, 0)
        .subscribe(response => this.products = response)
      }
    });
  }

  // Cargar más productos de la API
  onLoadMore() {
    if (this.categoryId) {
      this.offset += this.limit;

      this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
      .subscribe(data => {
        this.products = this.products.concat(data);
      });
    }
  }

}
