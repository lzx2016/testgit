import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, 'abc', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
    new Product(2, 'a12c', 10, 3.99, '这是第一个商品', ['电子产品', ' 硬件设备']),
    new Product(3, 'a123', 10, 3.99, '这是第一个商品', ['电子产品', ' 图书']),
    new Product(4, 'a412bc', 10, 3.99, '这是第一个商品', ['电子产品', ' 日常用品']),
    new Product(5, '12412bc', 10, 3.99, '这是第一个商品', ['电子产品', ' 家用电器']),
    new Product(6, '21412', 10, 3.99, '这是第一个商品', ['电子产品', ' 图书'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2018-04-01 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 2, '2018-04-02 22:22:22', '张1', 3, '东西不错1'),
    new Comment(3, 3, '2018-04-03 22:22:22', '张2', 3, '东西不错2'),
    new Comment(4, 4, '2018-04-04 22:22:22', '张4', 3, '东西不错3'),
    new Comment(5, 1, '2018-04-01 22:22:22', '张三', 3, '东西不错5di1'),
  ];
  constructor() { }
  getProducts() {
    return this.products;
  }
  getAllCategories(): string[] {
    return ['图书', '电子产品', '日常用品'];
  }
  getProduct(id: number) {
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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

export class  Comment {
  constructor(
    public id: number,
    public productId: number,
    public data: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
