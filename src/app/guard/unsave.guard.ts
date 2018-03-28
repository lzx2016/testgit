import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {ProductComponent} from "../product/product.component";
import {Observable} from "rxjs/Observable";

export class UnsaveGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return window.confirm('你确定要不保存并离开此页面?');
  }
}
