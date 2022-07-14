import { ProductUseCases } from './../../../../Domain/usecase/Product/product-use-case';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  formProduct:FormGroup;
  response$;

  constructor(private _getProductUseCase:ProductUseCases,
     public _formProduct:FormBuilder,
     private _routering:Router) 
     
     { 
    this.formProduct = this._formProduct.group({
      productname:[''],
      value:['']
    });

  } 


  ngOnInit(): void {
  }

  saveNew():any{
   this.response$ = this._getProductUseCase.saveNew(this.formProduct.value).subscribe(
     res=>{
      this._routering.navigateByUrl('list-product');
     }
   );
  }
}
