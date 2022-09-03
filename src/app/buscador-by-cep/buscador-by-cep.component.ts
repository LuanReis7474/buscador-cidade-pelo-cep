import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-buscador-by-cep',
  templateUrl: './buscador-by-cep.component.html',
  styleUrls: ['./buscador-by-cep.component.css']
})

export class BuscadorByCepComponent implements OnInit {

  formSearch: FormGroup;
  datasCity : any;
  thereIsDistrict: boolean = false;
  searchDone: boolean = false;
  constructor
  (
   private adressService: AdressService
  ) 
  { 
      this.formSearch = new FormGroup({
        cep: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit(): void {
    //this.search();
  }

  search()
  {
    const cep = this.formSearch.get("cep")?.value;
    this.adressService.getAddressFromCep(cep).subscribe(res=>
    {
      this.datasCity = res;
      if(this.datasCity.bairro)
      {
        this.thereIsDistrict = true;
      }
      this.searchDone=true;
      console.log(this.datasCity);
    });
    //const resp = this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
    //console.log(resp);
  } 

  back()
  {
    location.reload();
  }
  
}
