import { InvoiceHeaderComponent } from './UI/view-models/invoice/invoice-header/invoice-header.component';
import { EditClientComponent } from './UI/view-models/client/edit-client/edit-client.component';
import { AddClientComponent } from './UI/view-models/client/add-client/add-client.component';
import { ListClientComponent } from './UI/view-models/client/list-client/list-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductComponent } from './UI/view-models/product/list-product/list-product.component';
import { AddProductComponent } from './UI/view-models/product/add-product/add-product.component';
import { EditProductComponent } from './UI/view-models/product/edit-product/edit-product.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'list-product'},
  {path:'list-product', component:ListProductComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'edit-product/:id', component:EditProductComponent},
  {path:'list-client', component:ListClientComponent},
  {path:'add-client',component:AddClientComponent},
  {path:'edit-client/:id',component:EditClientComponent},
  {path: 'add-invoice',component:InvoiceHeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
