import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlicemiaService } from '../../services/glicemia.service';
import {CadastroGlicemiaRequest} from '../../models/cadastro.glicemia.request.model';
import {HistoricoItem} from '../../models/historico.item.model';

@Component({
  selector: 'app-addglicemia',
  standalone: true,
  imports: [
    Header,
    CommonModule,
    FormsModule
  ],
  templateUrl: './addglicemia.html',
  styleUrls: ['./addglicemia.css']
})
export class Addglicemia {
  nivel: number | null = null;
  data: string = '';
  hora: string = '';
  historico: HistoricoItem[] = [];
  resumoSelecionado: 'hoje' | 'semana' | 'mes' = 'hoje';
  historicoFiltrado: HistoricoItem[] = [];

  modoEdicao: boolean = false;
  idGlicemiaEditando: number | null = null;



  constructor(private glicemiaService: GlicemiaService) {
    this.carregarHistorico();
  }

  adicionar() {
    // Validação simples dos campos
    if (!this.nivel || !this.data || !this.hora) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Recupera usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (!usuarioLogado.id) {
      alert('Usuário não logado!');
      return;
    }

    // Cria o objeto com a interface do backend
    const dados: CadastroGlicemiaRequest = {
      valorGlicemia: this.nivel,
      dataGlicemia: this.data,
      horaGlicemia: this.hora,
      idUsuario: usuarioLogado.id
    };

    // Envia para o backend
    this.glicemiaService.adicionarGlicemia(dados).subscribe({
      next: () => {
        alert('Glicemia adicionada com sucesso!');
        this.nivel = null;
        this.data = '';
        this.hora = '';
        this.carregarHistorico();
      },
      error: (err) => {
        console.error('Erro ao adicionar glicemia:', err);
        alert('Erro ao adicionar glicemia!');
      }
    });
  }

  carregarHistorico() {
    this.glicemiaService.historicoRecente().subscribe({
      next: (res: HistoricoItem[]) => {
        // Adiciona status baseado no valor
        this.historico = res.map(item => {
          let status = '';
          if (item.valorGlicemia >= 70 && item.valorGlicemia <= 150) {
            status = 'Normal';
          } else if (item.valorGlicemia <= 70) {
            status = 'Glicemia Baixa';
          } else {
            status = 'Glicemia Alta';
          }
          return {...item, status};
        });
        // Atualiza o card de resumo
        this.selecionarResumo(this.resumoSelecionado);
      },
      error: (err) => console.error('Erro ao carregar histórico:', err)
    });
  }

  selecionarResumo(periodo: 'hoje' | 'semana' | 'mes') {
    this.resumoSelecionado = periodo;
    const hoje = new Date();

    this.historicoFiltrado = this.historico.filter(item => {
      const dataItem = new Date(item.dataGlicemia);

      switch (periodo) {
        case 'hoje':
          const dataFormatadaItem = dataItem.toISOString().slice(0, 11);
          const dataFormatadaHoje = hoje.toISOString().slice(0, 11);
          return dataFormatadaItem === dataFormatadaHoje;

        case 'semana':
          const inicioSemana = new Date(hoje);
          inicioSemana.setDate(hoje.getDate() - hoje.getDay());
          const fimSemana = new Date(inicioSemana);
          fimSemana.setDate(inicioSemana.getDate() + 6);
          inicioSemana.setHours(0, 0, 0, 0);
          fimSemana.setHours(23, 59, 59, 999);
          return dataItem >= inicioSemana && dataItem <= fimSemana;

        case 'mes':
          return (
            dataItem.getMonth() === hoje.getMonth() &&
            dataItem.getFullYear() === hoje.getFullYear()
          );
      }
    });
  }
  // Quando o usuário clica no lápis
  editar(item: HistoricoItem) {
    this.modoEdicao = true;
    this.idGlicemiaEditando = item.idGlicemia;

    // Preenche os campos com os dados do item
    this.nivel = item.valorGlicemia;
    this.data = item.dataGlicemia;
    this.hora = item.horaGlicemia;
  }

// Envia atualização para o backend
  salvarEdicao() {
    if (!this.idGlicemiaEditando || !this.nivel || !this.data || !this.hora) {
      alert('Preencha todos os campos para editar.');
      return;
    }

    const usuarioLogado = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (!usuarioLogado.id) {
      alert('Usuário não logado!');
      return;
    }

    const dadosAtualizados = {
      idGlicemia: this.idGlicemiaEditando,
      valorGlicemia: this.nivel,
      dataGlicemia: this.data,
      horaGlicemia: this.hora,
      idUsuario: usuarioLogado.id
    };

    this.glicemiaService.atualizarGlicemia(dadosAtualizados).subscribe({
      next: () => {
        alert('Glicemia atualizada com sucesso!');
        this.modoEdicao = false;
        this.idGlicemiaEditando = null;
        this.nivel = null;
        this.data = '';
        this.hora = '';
        this.carregarHistorico();
      },
      error: (err) => {
        console.error('Erro ao atualizar glicemia:', err);
        alert('Erro ao atualizar glicemia!');
      }
    });
  }

}
