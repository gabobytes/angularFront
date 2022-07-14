import { Observable, observable } from "rxjs";
import { Product } from "../product";

export abstract class ProductGateway {
    abstract getProducts(): Observable<Array<Product>>;
    abstract getProduct(id:String): Observable<Product>;
    abstract saveNew(_product: Product):Observable<void>;
    abstract delete(id:String):Observable<void>;
    abstract update(_product:Product,id:String):Observable<void>;
}