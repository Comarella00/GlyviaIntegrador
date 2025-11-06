import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  openSection: string | null = null;
  showLogoutConfirm = false;
  usuarioId: number | null = null; // 🔹 Guarda o ID do usuário logado

  notificacoes = [
    {titulo: 'Resumo da semana', icone: 'icons/party-popper.png'},
    {titulo: 'Ficamos com saudades', icone: 'icons/sad-face.png'},
    {titulo: 'Dia de comemorar', icone: 'icons/star.png'}
  ];

  constructor(private router: Router, public themeService: ThemeService) {
    const user = localStorage.getItem('user');
    if (user) {
      const usuario = JSON.parse(user);
      this.usuarioId = usuario.id;

      if (this.usuarioId !== null) {
        this.themeService.applyUserTheme(usuario.temaPreferido || 'light', this.usuarioId);
      }
  }
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  removerNotificacao(index: number) {
    this.notificacoes.splice(index, 1);
  }

  logout() {
    this.showLogoutConfirm = true;
  }

  confirmLogout(decisao: boolean) {
    this.showLogoutConfirm = false;

    if (decisao) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      sessionStorage.clear();

      // 🔹 Não remova os themes de outros usuários — só reseta visualmente
      this.themeService.resetTheme();

      this.router.navigate(['/login']);
    }
  }

  toggleTheme() {
    // 🔹 Não passa argumento
    this.themeService.toggleTheme();
  }
}
