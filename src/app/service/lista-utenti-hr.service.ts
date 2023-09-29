import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../model/ResponseData';

@Injectable({
  providedIn: 'root',
})
export class ListaUtentiHrService {
  private baseUrl = 'http://localhost:8771/rest/api/hr/utenti/custom';

  constructor(private http: HttpClient) {}

  vediListaUtentiHrCustom(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this.baseUrl}`);
  }
}
