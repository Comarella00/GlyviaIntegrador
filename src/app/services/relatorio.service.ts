import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private baseUrl = 'http://localhost:8080/Glyvia';

  constructor(private http: HttpClient) {}

  getRelatorioGlicemia(idUsuario: number, inicio: string, fim: string): Observable<any[]> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim);
    return this.http.get<any[]>(`${this.baseUrl}/glicemia/relatorio-glicemia?idUsuario=${idUsuario}&inicio=${inicio}&fim=${fim}`);
  }

  getRelatorioCaloria(idUsuario: number, inicio: string, fim: string): Observable<any[]> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim);
    return this.http.get<any[]>(`${this.baseUrl}/refeicao/relatorio-caloria?idUsuario=${idUsuario}&inicio=${inicio}&fim=${fim}`);
  }

  getRelatorioCarboidrato(idUsuario: number, inicio: string, fim: string): Observable<any[]> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim);
    return this.http.get<any[]>(`${this.baseUrl}/refeicao/relatorio-carboidrato?idUsuario=${idUsuario}&inicio=${inicio}&fim=${fim}`);
  }
}
