import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RelatorioService } from '../../services/relatorio.service';
import { RelatorioGlicemia } from '../../models/relatorio.glicemia.model';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-relatoriosgraficos',
  standalone: true,
  imports: [Header, NgStyle, CommonModule, FormsModule, BaseChartDirective],
  templateUrl: './relatoriosgraficos.html',
  styleUrl: './relatoriosgraficos.css'
})
export class Relatoriosgraficos implements OnInit {
  toggleAtivo: string = 'relatorio';
  tipoDado = 'Glicemia';
  dataInicio = '';
  dataFim = '';
  relatorio: RelatorioGlicemia[] = [];
  idUsuario!: number;

  //CONFIGURAÇÕES DO GRÁFICO
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Glicemia (mg/dL)',
        borderColor: '#4c7bb2',
        backgroundColor: 'rgba(76,123,178,0.3)',
        pointBackgroundColor: '#4c7bb2',
        fill: true,
        tension: 0.3
      }
    ]
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      x: { grid: { color: '#e0e0e0' } },
      y: {
        beginAtZero: true,
        grid: { color: '#e0e0e0' }
      }
    }
  };

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.carregarUsuario();
  }

  setToggle(valor: string) {
    this.toggleAtivo = valor;
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

    if (this.tipoDado === 'Glicemia') {
      this.relatorioService.getRelatorioGlicemia(this.idUsuario, this.dataInicio, this.dataFim)
        .subscribe({
          next: (dados) => {
            this.relatorio = dados;
            this.atualizarGrafico();
          },
          error: (err) => console.error('Erro ao carregar relatório:', err)
        });
    }
  }

  atualizarGrafico() {
    if (this.relatorio && this.relatorio.length > 0) {
      const labels = this.relatorio.map(item => `${item.dataGlicemia} ${item.horaGlicemia}`);
      const valores = this.relatorio.map(item => item.valorGlicemia);

      this.chartData = {
        labels,
        datasets: [
          {
            data: valores,
            label: 'Glicemia (mg/dL)',
            borderColor: '#4c7bb2',
            backgroundColor: 'rgba(76,123,178,0.3)',
            pointBackgroundColor: '#4c7bb2',
            fill: true,
            tension: 0.3
          }
        ]
      };
    }
  }
}
