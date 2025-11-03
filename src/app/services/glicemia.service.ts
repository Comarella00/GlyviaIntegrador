import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import {CadastroGlicemiaRequest} from '../models/cadastro.glicemia.request.model';

@Injectable({ providedIn: 'root' })
export class GlicemiaService {
  private apiUrl = 'http://localhost:8080/Glyvia/glicemia';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  adicionarGlicemia(dados: CadastroGlicemiaRequest): Observable<any> {
    const usuario = this.usuarioService.obterUsuarioLocal();
    if (!usuario || !usuario.id) {
      throw new Error('Usuário não logado!');
    }

    // Garante que o id do usuário esteja correto
    const body: CadastroGlicemiaRequest = {
      ...dados,
      idUsuario: usuario.id
    };

    return this.http.post(`${this.apiUrl}/cadastroGlicemia`, body);
  }

  historicoRecente(): Observable<any[]> {
    const usuario = this.usuarioService.obterUsuarioLocal();
    if (!usuario || !usuario.id) {
      throw new Error('Usuário não logado!');
    }

    return this.http.get<any[]>(`${this.apiUrl}/historicoRecente/${usuario.id}`);
  }
}
