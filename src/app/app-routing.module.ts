import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";
import {ProductDescComponent} from "./product-desc/product-desc.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:"full"},  //当URL路径为空时跳转到主页面 这是个重定向路由
  {path:'chat', component:ChatComponent, outlet:'aux'},
  {path: 'home', component: HomeComponent},  //
  {path: 'product', component: ProductComponent,children:[
    // {path:"",redirectTo:"/productDesc",pathMatch:"full"},
    {path:"productDesc", component: ProductDescComponent},
    {path:"", component: ProductDescComponent},
    {path:"seller/:id", component: SellerInfoComponent}
  ]},
  {path: 'product/:id', component: ProductComponent,children:[
    // {path:"",redirectTo:"/productDesc",pathMatch:"full"},
    {path:"productDesc", component: ProductDescComponent},
    {path:"", component: ProductDescComponent},
    {path:"seller/:id", component: SellerInfoComponent}
  ]},
  {path: '**', component: Code404Component},//当url与所有的路由都不匹配是跳转到这个组件
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
