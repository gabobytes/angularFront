import { ClientUseCases } from './../../../../Domain/usecase/Client/client-use-case';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  constructor(private _getClientUseCase:ClientUseCases) { }
  response$;
  Clients;

  ngOnInit(): void {
  this.response$ = this._getClientUseCase.getAllClients();
  this.response$.subscribe(
    (resp) =>{
      this.Clients = resp;
    }
  )
  }

  deleteClient(id:any,iControl:any){
    if(window.confirm("¿Eliminar registro?")){
      console.log(id);
      this.response$ = this._getClientUseCase.delete(id).subscribe((res)=>
      {
        this.Clients.splice(iControl,1);
      });
    }
  }

}
