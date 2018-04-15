import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('getProduct方法对象被调用');
    return new Product(0, 'iphone8', 5999, '最新款手机');
  }
}

export class Product {
  constructor(
    public id: number,
    public  title: string,
    public price: number,
    public desc: string
  ) {

  }
}
