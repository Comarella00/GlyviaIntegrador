import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/Glyvia/usuario';

  constructor(private http: HttpClient) {}

  // Faz login no backend
  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }

  // Salva o usuário logado no localStorage
  salvarUsuarioLocal(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify({id: usuario.id,
      email: usuario.email}));
  }

  // Recupera o usuário logado
  obterUsuarioLocal() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }

  getUsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  uploadFoto(id: number, foto: File) {
    const formData = new FormData();
    formData.append('foto', foto);
    return this.http.post(`http://localhost:8080/Glyvia/usuario/${id}/foto`, formData, {
      responseType: 'text'
    });
  }
}
