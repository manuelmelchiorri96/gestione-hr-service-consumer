import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/model/ResponseData';
import { ListaUtentiHrService } from 'src/app/service/lista-utenti-hr.service';

@Component({
  selector: 'app-lista-utenti-hr',
  templateUrl: './lista-utenti-hr.component.html',
  styleUrls: ['./lista-utenti-hr.component.css'],
})
export class ListaUtentiHrComponent implements OnInit {
  utentiHr!: Observable<ResponseData>;

  constructor(private listaUtentiHrService: ListaUtentiHrService) {}

  vediListaUtentiHr(): void {
    this.utentiHr = this.listaUtentiHrService.vediListaUtentiHrCustom();
  }

  ngOnInit(): void {
    this.vediListaUtentiHr();
  }
}
