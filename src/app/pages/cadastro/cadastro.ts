import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para ngIf, ngFor, etc.
import {CadastroService} from '../../services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class Cadastro {
  showPassword: boolean = false;

  usuario = {
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor(private router: Router, private http: HttpClient, private cadastroService: CadastroService) {}

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

    this.http.post<{mensagem: string, id: number}>(
      'http://localhost:8080/Glyvia/usuario/cadastro', body
    ).subscribe({
      next: (response) => {
        alert(response.mensagem);

        // Salva o ID no service para usar no componente Perguntas
        this.cadastroService.usuario.idUsuario = response.id;

        this.router.navigate(['/bemvindo']);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao cadastrar usuário!');
      }
    });

  }
}
