import { ClientUseCases } from './../../../../Domain/usecase/Client/client-use-case';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  
  msg: string; 
  showMsgSucces :boolean = false;
  msgDisplaySaved = environment.savedMessage;
  msgDisplayDeleted = environment.deleteMessage;


  constructor(private _getClientUseCase:ClientUseCases, private route:ActivatedRoute ) { }
  response$;
  Clients;

  ngOnInit(): void {
  this.response$ = this._getClientUseCase.getAllClients();
  this.response$.subscribe(
    (resp) =>{
      this.Clients = resp;
    }
  )

  this.route.queryParams
  .subscribe(params => {
    this.msg = params['msg'];
    if(this.msg == 'ok')        
        this.showMsgSucces = true;
  });
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
