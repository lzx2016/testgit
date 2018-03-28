import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {

    let productId: number = route.params['id'];
    if (productId ==1) {
      return new Product(1, 'iphone7')
    } else {
      this.router.navigate(["/home"])
    }

    throw new Error("Method not implemented.");
  }

}
