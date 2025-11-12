import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AddcarbomanualService {
  private apiUrl = 'http://localhost:8080/Glyvia/refeicao';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  adicionarRefeicao(dados: any): Observable<any> {
    const usuario = this.usuarioService.obterUsuarioLocal();

    if (!usuario || !usuario.id) {
      throw new Error('Usuário não logado!');
    }

    // Monta o corpo da requisição com o ID do usuário logado
    const body = {
      ...dados,
      usuarioId: usuario.id,
    };

    return this.http.post(`${this.apiUrl}/adicionar`, body);
  }

}
