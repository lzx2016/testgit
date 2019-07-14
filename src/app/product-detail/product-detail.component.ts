import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';
import {WebSocketService} from '../shared/web-socket.service';

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
  newRating = 5;
  newComment: string;
  isCommentAddHide = true;
  isWatched: boolean = false;
  currentBid: number;
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService,
              private wsService: WebSocketService) {

    // this.productTitle = this.routeInfo.snapshot.params['proTitle'];
  }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.productService.getCommentsForProductId(this.productId).subscribe(
      comments => this.comments = comments
    );
    this.productService.getProduct(this.productId);
    this.productService.getProduct(this.productId).subscribe(
      product => {
        this.product = product;
        this.currentBid = product.price;
      }
    );
  }
  watchProduct() {
    this.isWatched = !this.isWatched;
    this.wsService.createObsevableSocket('ws://localhost:8082', this.product.id)
      .subscribe(
        products => {
          const product = products.find(p => p.productId === this.product.id);
          this.currentBid = product.bid;
        }
      );
  }
  addComment() {
    const comment =  new Comment(0, this.product.id, new  Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    const sum  = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment =  null;
    this.newRating = 5;
    this.isCommentAddHide = true;
  }

}
