import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'http://localhost:8080/Glyvia/usuario/login';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, senha });
  }

  salvarUsuarioLocal(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  obterUsuarioLocal() {
    const dados = localStorage.getItem('usuario');
    return dados ? JSON.parse(dados) : null;
  }

  logout() {
    localStorage.removeItem('usuario');
  }
}
