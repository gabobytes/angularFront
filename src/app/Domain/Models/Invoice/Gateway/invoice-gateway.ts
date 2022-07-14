import { Observable } from 'rxjs';

export abstract class InvoiceGateway{
    abstract getInvoices(): Observable<Array<any>>;
    abstract saveNew(obj:any): Observable<any>;
    
}