import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGateway } from 'src/app/Domain/Models/Product/Gateway/product-gateway';
import { Product } from 'src/app/Domain/Models/Product/product';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs';

@Injectable({
  providedIn:'root'
})


export class ProductApiService extends ProductGateway {
  
  
  private _url = environment.baseUrl+environment.urlProducts;  
  constructor (private http: HttpClient) {super();}

  getProducts(): Observable<Product[]> {    
    return this.http.get<Array<Product>>(this._url);
  }

  getProduct(id: String): Observable<Product> {
    return this.http.get<Product>(this._url+id);
  }

  saveNew(_product: Product): Observable<any> {
    return this.http.post(this._url,_product);
  }

  update(_product: Product, id:String): Observable<any> {
    return this.http.put(this._url+id,_product);
  }
  
  delete(id: String): Observable<any> {
    return this.http.delete(this._url+id)
  }
 }