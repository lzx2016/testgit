import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products =[{
    name: "data方式传参数",
    id:"3"
  }, {
    name: "data方式传参数1",
    id:"4"
  }]
  constructor(private router: Router) {

  }
  toProductDetail(){
    this.router.navigate(['/product',2])
  }
}
