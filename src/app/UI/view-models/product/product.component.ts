import { Component, OnInit } from '@angular/core';
import { ProductUseCases } from '../../../Domain/usecase/Product/product-use-case';
//import { throws } from 'assert';

@Component({
  providers: [],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _getProductUseCase: ProductUseCases) { }
  response$;
  datos;
  

  

  ngOnInit(): void {
    this.response$ = this._getProductUseCase.getProduct('5');
    this.response$.subscribe(
      (data) =>{
        this.datos = data.data;
        
        console.log(data.data);        
      }
    );
  }

}
