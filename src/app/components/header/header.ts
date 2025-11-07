import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { ThemeService } from '../../services/theme.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  fotoUrl: string = 'icons/Default_Profile.png';

  constructor(
    private router: Router,
    public themeService: ThemeService,
    private usuarioService: UsuarioService
  ) {
    const user = localStorage.getItem('usuario');

    if (user) {
      const usuario = JSON.parse(user);
      if (usuario.fotoPerfil) {
        this.fotoUrl = `http://localhost:8080/Glyvia/usuario/${usuario.id}/foto`;
      } else {
        // tenta buscar do backend caso o localStorage esteja desatualizado
        this.usuarioService.getUsuarioById(usuario.id).subscribe({
          next: (dados) => {
            this.fotoUrl = dados.fotoPerfil
              ? `http://localhost:8080/Glyvia/usuario/${dados.id}/foto`
              : 'icons/Default_Profile.png';
          },
          error: () => {
            this.fotoUrl = 'icons/Default_Profile.png';
          }
        });
      }
    }
  }

  goToProfile() {
    console.log('clicou no botão');
    this.router.navigate(['/profile']);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
