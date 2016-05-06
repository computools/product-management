import { Component } from 'angular2/core';
import {RouteParams, Router} from "angular2/router";
import {IProduct} from './product';
import {Http} from "angular2/http";

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent{
    pageTitle: string = 'Product Detail';
    product: {};

    constructor(private _routeParams: RouteParams, private _router: Router, private _http: Http){
        let id = +this._routeParams.get('id');
        this.product = this._routeParams.get('item');
        this.pageTitle += `: ${id}`;
    }

    onBack(): void{
        this._router.navigate(['Products']);
    }
}