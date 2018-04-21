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
  newRating: number = 5;
  newComment: string;
  isCommentAddHide = true;
  constructor(private routeInfo: ActivatedRoute, private productService: ProductService ) {

    // this.productTitle = this.routeInfo.snapshot.params['proTitle'];
  }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.comments = this.productService.getCommentsForProductId(this.productId);
    this.product = this.productService.getProduct(this.productId);
  }
  addComment() {
    let comment =  new Comment(0, this.product.id, new  Date().toISOString(),'someone',this.newRating, this.newComment)
    this.comments.unshift(comment);

    let sum  = this.comments.reduce((sum, comment) => sum +comment.rating, 0);
    this.product.rating = sum/ this.comments.length;
    this.newComment =  null;
    this.newRating = 5;
    this.isCommentAddHide = true;
  }

}
