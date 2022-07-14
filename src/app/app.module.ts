import { InvoiceApiService } from './Infrastructure/driven-adapter/invoice-api/invoice-api.service';
import { InvoiceGateway } from 'src/app/Domain/Models/Invoice/Gateway/invoice-gateway';
import { ClientApiService } from './Infrastructure/driven-adapter/client-api/client-api.service';
import { ClientGateway } from 'src/app/Domain/Models/Client/Gateway/client-gateway';
import { ProductGateway } from 'src/app/Domain/Models/Product/Gateway/product-gateway';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductApiService } from './Infrastructure/driven-adapter/product-api/product-api-service';
import { ProductComponent } from './UI/view-models/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductComponent } from './UI/view-models/product/list-product/list-product.component';
import { AddProductComponent } from './UI/view-models/product/add-product/add-product.component';
import { EditProductComponent } from './UI/view-models/product/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListClientComponent } from './UI/view-models/client/list-client/list-client.component';
import { AddClientComponent } from './UI/view-models/client/add-client/add-client.component';
import { EditClientComponent } from './UI/view-models/client/edit-client/edit-client.component';
import { InvoiceHeaderComponent } from './UI/view-models/invoice/invoice-header/invoice-header.component';
import { InvoiceAddDetailComponent } from './UI/view-models/invoice/invoice-add-detail/invoice-add-detail.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,    
    ProductComponent, ListProductComponent, AddProductComponent, EditProductComponent, ListClientComponent, AddClientComponent, EditClientComponent, InvoiceHeaderComponent, InvoiceAddDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,    
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
    
    
  ],
  providers: [{provide: ProductGateway, useClass:ProductApiService },
    {provide:ClientGateway,useClass:ClientApiService},
    {provide:InvoiceGateway,useClass:InvoiceApiService}
  ]
  
  
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
