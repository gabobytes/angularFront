import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Domain/Models/Client/client';
import { ClientGateway } from 'src/app/Domain/Models/Client/Gateway/client-gateway';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService  extends ClientGateway{



  constructor(private http: HttpClient) {super(); }

  private _url = environment.baseUrl+environment.urlClients;

  getAll(): Observable<Client[]> {
    return this.http.get< Array<Client>>(this._url);
  }

  getById(id: String): Observable<Client> {
   return this.http.get<Client>(this._url+id);
  }
  saveNew(_client: Client): Observable<any> {
     return this.http.post(this._url, _client);
  }

  update(id: String,_client: Client, ): Observable<any> {
    return this.http.put(this._url+id,_client);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(this._url+id);
  }  

  /*getDocumentName() {
   return this.http.get(this._url) 
   .pipe(  map((response:[]) => response.map(item => item['firstname']))
   )
    ;;
  
  } */
  
}
