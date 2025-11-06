import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioGlicemia } from '../models/relatorio.glicemia.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = 'http://localhost:8080/Glyvia';

  constructor(private http: HttpClient) {}

  getRelatorioGlicemia(idUsuario: number, inicio: string, fim: string): Observable<RelatorioGlicemia[]> {
    const params = new HttpParams()
      .set('idUsuario', idUsuario)
      .set('inicio', inicio)
      .set('fim', fim);
    return this.http.get<RelatorioGlicemia[]>(`${this.apiUrl}/glicemia/relatorioGlicemia`, { params });
  }
}
