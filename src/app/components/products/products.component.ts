import { Component } from '@angular/core';

import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  // Productos agregados al carrito
  shoppingCart: Product[] = [];
  // Total del carrito
  total: number = 0;

  products: Product[] = [
    {
      id: '1',
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    }
  ]

  constructor(
    private storeService: StoreService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  // Recibir el producto agregado al carrito
  onAddedProduct(product: Product) {
    this.storeService.addtoCart(product);
    this.total = this.storeService.getTotal()
  }

}
