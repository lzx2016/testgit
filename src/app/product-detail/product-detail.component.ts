import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productTitle: string;
  product: Product;
  productId: number;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService ) {

    // this.productTitle = this.routeInfo.snapshot.params['proTitle'];
  }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.comments = this.productService.getCommentsForProductId(this.productId);
    this.product = this.productService.getProduct(this.productId);
  }

}
