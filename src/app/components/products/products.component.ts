import { Component, OnInit } from '@angular/core';

import { Product, CreateProductDTO } from '../../models/product.model';
import { StoreService } from '../../services/store.service'
import { ProductsService } from "../../services/products.service";
import SwiperCore from 'swiper';

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
  // Mostrar detalle del producto
  showProductDetail: boolean = false;
  // Producto elegido para mostrar el detale
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  };

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

  // Mostrar/ocultar detalle del producto
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  // Hacer una petición del producto que se quiere mostrar en el detalle
  onShowProductDetail(id: string) {
    this.productsService.getProduct(id)
    .subscribe(data => {
      // Mostrar sidebar de detalle del producto
      this.toggleProductDetail();

      // Guardar la información del producto elegido
      this.productChosen = data;
    });
  }

  // Crear un nuevo producto
  createNewProduct() {
    const newProduct: CreateProductDTO = {
      title: 'Waifu',
      description: 'Lucy señora y patrona de lo los devs',
      price: 100000000,
      categoryId: 5,
      images: ['https://i.ibb.co/vvrkgDr/lucy.jpg']
    }

    this.productsService.create(newProduct)
    .subscribe(data => {
      console.log(data);

      this.products.unshift(data)
    })
  }
}
