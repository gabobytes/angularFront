import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceGateway } from 'src/app/Domain/Models/Invoice/Gateway/invoice-gateway';

@Injectable({
  providedIn: 'root'
})
export class InvoiceApiService extends InvoiceGateway {
  
  private _url =  environment.baseUrl+environment.urlInvoices;  
  constructor (private http: HttpClient) {super();}

  getInvoices(): Observable<any[]> {    
    
    return this.http.get<Array<any>>(this._url);
    
  }
  saveNew(obj: any): Observable<any> {
    return this.http.post(this._url+'PostInvoice/',obj);
  }

}
