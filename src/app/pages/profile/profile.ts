import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  openSection: string | null = null;

notificacoes = [
  { titulo: 'Resumo da semana', icone: "icons/party-popper.png" },
  { titulo: 'Ficamos com saudades', icone: "icons/sad-face.png" },
  { titulo: 'Dia de comemorar', icone: "icons/star.png" }
];

  constructor(private router: Router) {}

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  removerNotificacao(index: number) {
    this.notificacoes.splice(index, 1);
  }

  logout() {
    const confirmar = window.confirm('Você realmente deseja sair?');

    if (confirmar) {
      this.router.navigate(['/login']);
    }
  }

}
