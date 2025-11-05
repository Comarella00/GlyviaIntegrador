import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { DashboardService } from '../../services/dashboard.service';
import { UsuarioService } from '../../services/usuario.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Header,
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  ultimaGlicemia: any = { valor: '-', horario: '-' };
  mediaDiaria: any = '-';
  statusRapido: any = false;

  constructor(
    private dashboardService: DashboardService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const usuario = this.usuarioService.obterUsuarioLocal();
    const idUsuario = usuario ? usuario.id : null;

    if (!idUsuario) {
      console.error('Nenhum usuário encontrado!');
      return;
    }

    forkJoin({
      ultima: this.dashboardService.getUltimaGlicemia(idUsuario),
      media: this.dashboardService.getMediaDiaria(idUsuario),
      status: this.dashboardService.getStatusRapido(idUsuario)
    }).subscribe({
      next: (res) => {
        console.log('Retorno completo do forkJoin:', res);

        this.ultimaGlicemia = {
          valorGlicemia: res.ultima.valorGlicemia,
          horaGlicemia: res.ultima.horaGlicemia
        };

        this.mediaDiaria = res.media.mediaGlicemia;
        this.statusRapido = res.status.dentroFaixa;
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard:', err);
      }
    });
  }
}
