import { ProductApiService } from './Infrastructure/driven-adapter/product-api/product-api-service';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response$ ;
  products;
  title = 'invoicing';

  constructor(private _productApiService : ProductApiService) {
  }
  ngOnInit(): void {

   
    
  }

}
