import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./login.css']
})

export class Login {
  email: string = '';
  senha: string = '';
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  navigateCadastro() {
    this.router.navigate(['/cadastro']);
  }

  navigateForgot() {
    this.router.navigate(['/forgot']);
  }

  navigateDashboard() {
    this.usuarioService.login(this.email, this.senha).subscribe({
      next: (res) => {
        // Salva o usuário logado no localStorage
        this.usuarioService.salvarUsuarioLocal({
          idUsuario: res.idUsuario,
          email: res.email
        });

        alert('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        if (err.status === 401) {
          alert('Email ou senha incorretos!');
        } else {
          alert('Erro ao fazer login!');
        }
      }
    });
  }
}
