import { Component, OnInit } from '@angular/core';
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
export class Profile implements OnInit {
  openSection: string | null = null;
  showLogoutConfirm = false;
  usuarioId: number | null = null;
  usuario: any = null;
  fotoUrl: string = 'icons/profile-picture.png';
  isUploading = false;

  constructor(
    private router: Router,
    public themeService: ThemeService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const user = localStorage.getItem('usuario');

    if (user) {
      const usuario = JSON.parse(user);
      this.usuarioId = usuario.id;

      if (this.usuarioId !== null) {
        // Aplica o tema do usuário
        this.themeService.applyUserTheme(usuario.temaPreferido || 'light', this.usuarioId);

        // 🔹 Busca dados atualizados do backend
        this.usuarioService.getUsuarioById(this.usuarioId).subscribe({
          next: (dados) => {
            this.usuario = dados;
            console.log('Usuário carregado:', this.usuario);

            // 🔹 Monta URL da foto corretamente
            if (this.usuario.fotoPerfil && this.usuario.fotoPerfil.trim() !== '') {
              this.fotoUrl = `http://localhost:8080/Glyvia/usuario/${this.usuarioId}/foto?${new Date().getTime()}`;
            } else {
              this.fotoUrl = 'icons/profile-picture.png';
            }

            // 🔹 Atualiza localStorage
            localStorage.setItem('usuario', JSON.stringify(this.usuario));
          },
          error: (erro) => {
            console.error('Erro ao carregar dados do usuário:', erro);
          }
        });
      }
    }
  }

  // 🔹 Upload da nova foto de perfil
  onFotoSelecionada(event: any): void {
    const arquivo: File = event.target.files[0];
    if (!arquivo) return;

    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!tiposPermitidos.includes(arquivo.type)) {
      alert('Formato inválido. Envie apenas imagens JPG ou PNG.');
      return;
    }

    const tamanhoMaximo = 5 * 1024 * 1024;
    if (arquivo.size > tamanhoMaximo) {
      alert('A imagem deve ter no máximo 5 MB.');
      return;
    }

    if (this.usuarioId !== null) {
      this.isUploading = true;

      // 🔹 Faz upload para o backend
      this.usuarioService.uploadFoto(this.usuarioId, arquivo).subscribe({
        next: (nomeArquivo: string) => {
          console.log('Foto enviada com sucesso:', nomeArquivo);

          // 🔹 Atualiza o objeto usuário e salva localmente
          this.usuario.fotoPerfil = nomeArquivo;
          localStorage.setItem('usuario', JSON.stringify(this.usuario));

          // 🔹 Atualiza URL da imagem (sem cache)
          this.fotoUrl = `http://localhost:8080/Glyvia/usuario/${this.usuarioId}/foto?${new Date().getTime()}`;

          // 🔹 Atualiza preview no HTML
          const img = document.querySelector<HTMLImageElement>('#fotoUploadPreview');
          if (img) img.src = this.fotoUrl;

          this.isUploading = false;
        },
        error: (erro) => {
          console.error('Erro ao enviar foto:', erro);
          this.isUploading = false;
        }
      });
    }
  }

  toggleSection(section: string): void {
    this.openSection = this.openSection === section ? null : section;
  }

  logout(): void {
    this.showLogoutConfirm = true;
  }

  confirmLogout(decisao: boolean): void {
    this.showLogoutConfirm = false;

    if (decisao) {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      sessionStorage.clear();
      this.themeService.resetTheme();
      this.router.navigate(['/login']);
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
