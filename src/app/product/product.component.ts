import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private subscribeProductiId: number;
  private  productId:number;
  private resoleproductName: string;
  private resoleproductId: number;
  private  paramsProductId:number;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.routerInfo.snapshot.queryParams["id"];
    this.paramsProductId = this.routerInfo.snapshot.params["id"];
    this.routerInfo.params.subscribe((params: Params) => {
      this.subscribeProductiId = params['id']
    });

    // 通过路由守卫赋值
    this.routerInfo.data.subscribe((data:{product:Product}) => {
      this.resoleproductId = data.product.id;
      this.resoleproductName = data.product.name;
    });
  }

}

export class Product {
  constructor(public id:number, public name:string) {}
}
