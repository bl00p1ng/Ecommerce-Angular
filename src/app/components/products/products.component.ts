import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  // Productos agregados al carrito
  shoppingCart: Product[] = [];
  // Total del carrito
  total: number = 0;

  products: Product[] = []

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // Obtener productos desde la API
    this.productsService.getProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  // Recibir el producto agregado al carrito
  onAddedProduct(product: Product) {
    this.storeService.addtoCart(product);
    this.total = this.storeService.getTotal()
  }

}
