import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  mensagem: string = '';
  showPassword: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (!this.email || !this.senha) {
      this.mensagem = '⚠️ Preencha todos os campos!';
      return;
    }

    this.usuarioService.listar().subscribe({
      next: (usuarios: Usuario[]) => {
        const usuarioEncontrado = usuarios.find(
          u => u.email === this.email && u.senha === this.senha
        );

        if (usuarioEncontrado) {
          this.mensagem = `✅ Bem-vinda, ${usuarioEncontrado.nome}!`;
          console.log('Usuário logado:', usuarioEncontrado);

          // Exemplo de redirecionamento
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1500);
        } else {
          this.mensagem = '❌ Usuário ou senha incorretos.';
        }
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
        this.mensagem = 'Erro ao conectar com o servidor.';
      }
    });
  }

  navigateForgot() {
    this.router.navigate(['/esqueci-senha']);
  }

  navigateCadastro() {
    this.router.navigate(['/cadastro']);
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
