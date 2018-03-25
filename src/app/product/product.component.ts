import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private subscribeProductiId: number;
  private  productiId:number;
  private  paramsProductiId:number;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productiId = this.routerInfo.snapshot.queryParams["id"];
    this.paramsProductiId = this.routerInfo.snapshot.params["id"];
    this.routerInfo.params.subscribe((params: Params) => {
      this.subscribeProductiId = params['id']
    })
  }

}
