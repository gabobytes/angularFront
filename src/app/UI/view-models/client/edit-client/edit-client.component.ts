import { ActivatedRoute, Router } from '@angular/router';
import { ClientUseCases } from './../../../../Domain/usecase/Client/client-use-case';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  response$;
  Client;
  id:any;

  formClient:FormGroup;

  constructor(private _getClientUseCase:ClientUseCases,private _activatedRouter:ActivatedRoute,public _formProduct:FormBuilder,private _routering:Router  ) {
    this.id = _activatedRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.response$= this._getClientUseCase.getClientById(this.id);

    this.response$.subscribe(
      (resp) => {
        this.formClient.setValue({
          document:resp.data['document'],
          firstname:resp.data['firstname'],
          lastname:resp.data['lastname'],
          phone:resp.data['phone']
        })
      }
    );

    this.formClient = this._formProduct.group({
      document:[''],
      firstname:[''],
      lastname:[''],
      phone:['']
    });
  }

    updateClient():any{

      this.response$ = this._getClientUseCase.updateClient(this.id,this.formClient.value).subscribe(()=>{
        this._routering.navigateByUrl('list-client');
      });
    }

  

  }


