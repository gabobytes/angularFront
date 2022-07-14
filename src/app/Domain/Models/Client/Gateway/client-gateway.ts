import { observable } from 'rxjs';
import { Client } from './../client';
import { Observable } from 'rxjs';
export abstract class ClientGateway {
    abstract getAll(): Observable<Array<Client>>;
    abstract getById(id:String):Observable<Client>;
    abstract saveNew(_client:Client):Observable<any>;   
    abstract update(id:String,_client:Client):Observable<any>;
    abstract delete(id:string):Observable<any>;
    
}