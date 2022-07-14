import { Product } from '../../Models/Product/product';
import { catchError, map, Observable, tap } from 'rxjs';
import { Injectable } from "@angular/core";
import { ProductGateway } from "../../Models/Product/Gateway/product-gateway";

@Injectable({
    providedIn:'root'
})

export class ProductUseCases{
    constructor(private _productGateway:ProductGateway) {}
    getProduct(id: String): Observable <Product> {
        return this._productGateway.getProduct(id);
    }
    getProducts(): Observable <Array<Product>>{
        return this._productGateway.getProducts()
        .pipe(
            map((dataRaw: any) => {   
                return dataRaw.data;
            }
            )
            , tap((respOk: any) => {
            })
            , catchError((err: any) => {
                throw Error(err);
            })
        );
    }

    saveNew(_product: Product): Observable<any> {
        return this._productGateway.saveNew(_product);
     }

     updateProduct(_product:Product, id:String):Observable<any>{
         return this._productGateway.update(_product,id);
     }

     deleteProduct(id:String):Observable<any>{
        return this._productGateway.delete(id);
     }
}