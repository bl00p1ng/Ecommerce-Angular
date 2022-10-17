import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  // Agregar producto al carrito
  addToCart() {
    this.addedProduct.emit(this.product)
  }

}
