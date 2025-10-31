import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para ngIf, ngFor, etc.

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule // necessário para diretivas do Angular
  ]
})
export class Cadastro {
  showPassword: boolean = false;

  usuario = {
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  goBack() {
    this.router.navigate(['/']);
  }

  cadastrarUsuario() {
    if (this.usuario.senha !== this.usuario.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const body = {
      email: this.usuario.email,
      senha: this.usuario.senha,
      confirmarSenha: this.usuario.confirmarSenha
    };

    this.http.post('http://localhost:8080/Glyvia/usuario/cadastro', body, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log('Resposta do backend:', response);  // Para debug
          alert('Usuário cadastrado com sucesso!');
          this.router.navigate(['/bemvindo']);
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao cadastrar usuário!');
        }
      });
  }
}
