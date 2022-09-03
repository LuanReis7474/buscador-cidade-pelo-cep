import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorByCepComponent } from '../app/buscador-by-cep/buscador-by-cep.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-by-cep', pathMatch: 'full' },
  { path: 'search-by-cep', component: BuscadorByCepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
