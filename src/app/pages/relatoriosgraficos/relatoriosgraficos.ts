import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-relatoriosgraficos',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './relatoriosgraficos.html',
  styleUrls: ['./relatoriosgraficos.css']
})
export class Relatoriosgraficos {
  tipoDado: string = 'Glicemia';
  dataInicio: string = '';
  dataFim: string = '';
  relatorio: any[] = [];
  idUsuario!: number;
  carregando = false;

  constructor(private relatorioService: RelatorioService) {
    this.carregarUsuario();
  }

  carregarUsuario() {
    const usuarioStorage = localStorage.getItem('usuario');
    if (usuarioStorage) {
      const usuario = JSON.parse(usuarioStorage);
      this.idUsuario = usuario.id || usuario.idUsuario;
    } else {
      console.error('Usuário não encontrado no localStorage!');
    }
  }

  buscar() {
    if (!this.idUsuario || !this.dataInicio || !this.dataFim) {
      alert('Preencha o período antes de buscar!');
      return;
    }

    this.carregando = true;

    let requisicao;
    switch (this.tipoDado) {
      case 'Glicemia':
        requisicao = this.relatorioService.getRelatorioGlicemia(this.idUsuario, this.dataInicio, this.dataFim);
        break;
      case 'Calorias':
        requisicao = this.relatorioService.getRelatorioCaloria(this.idUsuario, this.dataInicio, this.dataFim);
        break;
      case 'Carboidratos':
        requisicao = this.relatorioService.getRelatorioCarboidrato(this.idUsuario, this.dataInicio, this.dataFim);
        break;
    }

    requisicao?.subscribe({
      next: (dados) => {
        this.relatorio = dados;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar relatório:', err);
        this.carregando = false;
      }
    });
  }
}
