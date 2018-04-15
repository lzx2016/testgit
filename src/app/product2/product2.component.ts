import {Component, Injector, OnInit} from '@angular/core';

import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  product: Product;
  constructor(private productService: ProductService) { }
  // 下面代码同样可以实现依赖注入
  // constructor(private injector: Injector) {
  //   this.productService = this.injector.get(ProductService)
  // }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }


}
