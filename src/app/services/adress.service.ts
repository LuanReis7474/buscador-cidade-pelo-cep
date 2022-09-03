import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponseGetAddressByCep } from '../common/types/addres';


@Injectable({
  providedIn: 'root'
})
export class AdressService {

  constructor(private http: HttpClient) { }


  public getAddressFromCep(cep: string) {  
      console.log(cep);
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
