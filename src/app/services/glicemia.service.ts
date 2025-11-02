import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({ providedIn: 'root' })
export class GlicemiaService {
  private apiUrl = 'http://localhost:8080/Glyvia/glicemia';

  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

  adicionarGlicemia(dados: any) {
    const usuario = this.usuarioService.obterUsuarioLocal();
    if (!usuario) throw new Error('Usuário não logado!');

    // Adiciona o idUsuario ao corpo da requisição
    const body = { ...dados, idUsuario: usuario.idUsuario };
    return this.http.post(`${this.apiUrl}/cadastroGlicemia`, body);
  }
}
