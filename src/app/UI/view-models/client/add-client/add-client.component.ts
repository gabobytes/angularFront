import { Router } from '@angular/router';
import { ClientUseCases } from './../../../../Domain/usecase/Client/client-use-case';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  formClient:FormGroup;
  response$;

  constructor(private _getClientUseCase:ClientUseCases,public _formClient:FormBuilder, private _routering:Router) {
    this.formClient = this._formClient.group({
      document:[''],
      firstname:[''],
      lastname:[''],
      phone:['']
    });

   }

  ngOnInit(): void {
  }
  saveNew():any{
    this.response$ = this._getClientUseCase.saveNew(this.formClient.value).subscribe(
      res=>{
        this._routering.navigateByUrl('list-client');
      }
    )
  }
}
