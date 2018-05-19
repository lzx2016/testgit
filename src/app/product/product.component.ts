import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:  Observable<Product[]>;
  private dataSource: Observable<any>;
  // private products: Array<any> = [];
  private imgUrl = 'http://placehold.it/320*150';
  constructor(private productService: ProductService, private http: Http) {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');

    this.dataSource = this.http.get('/api/products', {headers: myHeaders})
      .map((res) => res.json());
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params));
  }


}


