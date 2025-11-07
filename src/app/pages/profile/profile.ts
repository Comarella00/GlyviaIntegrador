import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { UsuarioService } from '../../services/usuario.service';

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
  usuarioId: number | null = null;
  usuario: any = null;
  fotoUrl: string = 'icons/profile-picture.png';
  isUploading = false;

  notificacoes = [
    { titulo: 'Resumo da semana', icone: 'icons/party-popper.png' },
    { titulo: 'Ficamos com saudades', icone: 'icons/sad-face.png' },
    { titulo: 'Dia de comemorar', icone: 'icons/star.png' }
  ];

  constructor(
    private router: Router,
    public themeService: ThemeService,
    private usuarioService: UsuarioService
  ) {
    const user = localStorage.getItem('usuario');

    if (user) {
      const usuario = JSON.parse(user);
      this.usuarioId = usuario.id;

      if (this.usuarioId !== null) {
        this.themeService.applyUserTheme(usuario.temaPreferido || 'light', this.usuarioId);

        this.usuarioService.getUsuarioById(this.usuarioId).subscribe({
          next: (dados) => {
            this.usuario = dados;
            console.log('Usuário carregado:', this.usuario);

            if (this.usuario.fotoPerfil) {
              this.fotoUrl = `http://localhost:8080/Glyvia/usuario/${this.usuarioId}/foto`;
            }
          },
          error: (erro) => {
            console.error('Erro ao carregar dados do usuário:', erro);
          }
        });
      }
    }
  }

  //Upload da nova foto
  onFotoSelecionada(event: any) {
    const arquivo: File = event.target.files[0];
    if (!arquivo) return;

    //Tipos de imagem permitidos
    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/jpg'];

    //Validação do tipo MIME
    if (!tiposPermitidos.includes(arquivo.type)) {
      alert('Formato inválido. Envie apenas imagens JPG ou PNG.');
      return;
    }

    //Validação do tamanho (ex: até 5 MB)
    const tamanhoMaximo = 5 * 1024 * 1024;
    if (arquivo.size > tamanhoMaximo) {
      alert('A imagem deve ter no máximo 5 MB.');
      return;
    }

    if (this.usuarioId !== null) {
      this.isUploading = true;

      this.usuarioService.uploadFoto(this.usuarioId, arquivo).subscribe({
        next: (res) => {
          console.log('Foto enviada com sucesso:', res);
          this.fotoUrl = `http://localhost:8080/Glyvia/usuario/${this.usuarioId}/foto?${new Date().getTime()}`;
          this.isUploading = false;
        },
        error: (erro) => {
          console.error('Erro ao enviar foto:', erro);
          this.isUploading = false;
        }
      });
    }
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  logout() {
    this.showLogoutConfirm = true;
  }

  confirmLogout(decisao: boolean) {
    this.showLogoutConfirm = false;

    if (decisao) {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      sessionStorage.clear();
      this.themeService.resetTheme();
      this.router.navigate(['/login']);
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
