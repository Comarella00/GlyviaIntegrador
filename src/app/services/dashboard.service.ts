import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:8080/Glyvia/glicemia';

  constructor(private http: HttpClient) {}

  getUltimaGlicemia(idUsuario: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/ultimaGlicemia/${idUsuario}`);
  }

  getMediaDiaria(idUsuario: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mediaDiaria/${idUsuario}`);
  }

  getStatusRapido(idUsuario: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/statusRapido/${idUsuario}`);
  }
}
