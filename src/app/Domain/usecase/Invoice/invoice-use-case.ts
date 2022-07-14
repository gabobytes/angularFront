import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { InvoiceGateway } from "../../Models/Invoice/Gateway/invoice-gateway";

@Injectable({
    providedIn:'root'
})

export class InvoiceUseCases{
  
    constructor(private _invoiceGateway:InvoiceGateway) {  }

     getInvoices(): Observable<Array<any>>{
        return this._invoiceGateway.getInvoices();
     }
     saveNew(obj:any): Observable<any>{
        console.log("🚀 ~ file: invoice-use-case.ts ~ line 18 ~ InvoiceUseCases ~ saveNew ~ obj", obj)
        return this._invoiceGateway.saveNew(obj);
        
     }

}