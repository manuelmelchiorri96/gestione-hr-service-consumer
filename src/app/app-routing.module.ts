import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUtentiHrComponent } from './lista-utenti-hr/lista-utenti-hr/lista-utenti-hr.component';

const routes: Routes = [
  { path: 'utentiHr', component: ListaUtentiHrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
