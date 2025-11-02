import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class CadastroService {
  usuario: Usuario = { email: '',
    senha: '' };

  constructor(private http: HttpClient) {}

  setPerguntas(dados: {
    nome: string;
    genero: string;
    tipoInsulina: string;
    viaAplicacao: string;
    pesoAtual: number | null;
    altura: number | null;
    metaGlicemica: number | null;
    icr: number | null;
    dataNascimento: string
  }) {
    Object.assign(this.usuario, dados);
  }

  salvarPerguntas(): Observable<any> {
    if (!this.usuario.idUsuario) {
      throw new Error('ID do usuário não definido!');
    }

    return this.http.post(
      `http://localhost:8080/Glyvia/usuario/perguntas/${this.usuario.idUsuario}`,
      this.usuario
    );
  }

}
