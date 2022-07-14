import { ProductUseCases } from './../../../../Domain/usecase/Product/product-use-case';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private _getProductUseCase: ProductUseCases) { }
  response$;
  products;


  ngOnInit(): void {
    this.response$ = this._getProductUseCase.getProducts();
    this.response$.subscribe(
      (resp) =>{
        this.products = resp;
      });
  }  

  deleteProduct(id:any,iControl:any)  {

    if(window.confirm("¿Eliminar Registro?"))
    {
      this.response$ = this._getProductUseCase.deleteProduct(id).subscribe((res)=> {
        this.products.splice(iControl,1);  
      } );
    }
  }  
}
