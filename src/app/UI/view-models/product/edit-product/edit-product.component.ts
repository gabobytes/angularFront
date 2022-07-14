import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductUseCases } from './../../../../Domain/usecase/Product/product-use-case';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  response$
  Product;
  id:any;

  formProduct:FormGroup;

  constructor(private _getProductUseCase: ProductUseCases,
     private activeRouter:ActivatedRoute, public _formProduct:FormBuilder, private _routering:Router) 
  {
    this.id = activeRouter.snapshot.paramMap.get('id');    
  }



  ngOnInit(): void {
    this.response$ = this._getProductUseCase.getProduct(this.id);
    this.response$.subscribe(
      (resp) => {
        this.formProduct.setValue({
          productname:resp.data['productname'],
          value:resp.data['value']
        })        
      }
    );    
    this.formProduct = this._formProduct.group({
      productname:[''],
      value:['']
    });
  }

  updateProduct():any{
    console.log(this.id, " ", this.formProduct.value);

    this.response$ = this._getProductUseCase.updateProduct(this.formProduct.value ,this.id).subscribe(()=>{
      this._routering.navigateByUrl('list-product');
    });
  }

  

}
