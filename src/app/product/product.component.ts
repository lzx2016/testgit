import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320*150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'abc', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
      new Product(2, 'a12c', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
      new Product(3, 'a123', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
      new Product(4, 'a412bc', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
      new Product(5, '12412bc', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
      new Product(6, '21412', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品'])
    ];
  }

}

export class  Product {
  constructor(
  public  id: number,
  public  title: string,
  public  price: number,
  public rating: number,
  public  desc: string,
  public  categories: Array<string>
  ) {
}
}
