import { environment } from 'src/environments/environment';
import { ProductUseCases } from './../../../../Domain/usecase/Product/product-use-case';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  msg: string; 
  showMsgSucces :boolean = false;
  msgDisplaySaved = environment.savedMessage;
  msgDisplayDeleted = environment.deleteMessage;


  constructor(private _getProductUseCase: ProductUseCases, private route:ActivatedRoute) { }
  response$;
  products;
  
  ngOnInit(): void {
    this.response$ = this._getProductUseCase.getProducts();
    this.response$.subscribe(
      (resp) =>{
        this.products = resp;
      });

    this.route.queryParams
    .subscribe(params => {
      this.msg = params['msg'];
      if(this.msg == 'ok')        
          this.showMsgSucces = true;
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
;