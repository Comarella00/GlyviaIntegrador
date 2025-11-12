import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/Glyvia/usuario';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, senha });
  }

  salvarUsuarioLocal(usuario: any) {
    const usuarioFormatado = {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome || '',
      temaPreferido: usuario.temaPreferido || 'light',
      fotoPerfil: usuario.fotoPerfil || ''
    };
    localStorage.setItem('usuario', JSON.stringify(usuarioFormatado));
  }

  obterUsuarioLocal() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }

  getUsuarioById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      map((res: any) => {
        // Garante que o campo fotoPerfil nunca venha undefined
        return {
          ...res,
          fotoPerfil: res.fotoPerfil || ''
        };
      })
    );
  }

  uploadFoto(id: number, foto: File): Observable<string> {
    const formData = new FormData();
    formData.append('foto', foto);

    return this.http.post(`${this.apiUrl}/${id}/foto`, formData, {
      responseType: 'text'
    });
  }

  getFotoUrl(id: number): string {
    return `${this.apiUrl}/${id}/foto`;
  }
}
