import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';


declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.css']
})

export class Login {
  constructor(private router: Router) {}

  showPassword: boolean = false;

  ngAfterViewInit(): void {
    // Inicializa o botão de login do Google
    google.accounts.id.initialize({
      client_id: 'SEU_CLIENT_ID.apps.googleusercontent.com', // substitua pelo seu client ID do Google Cloud
      callback: (response: any) => this.handleCredentialResponse(response)
    });

    // Renderiza o botão dentro do elemento com a classe .googleBtn
    google.accounts.id.renderButton(
      document.querySelector('.googleBtn'),
      { theme: 'filled_blue', size: 'large', text: 'signin_with', shape: 'rectangular' }
    );
  }

  handleCredentialResponse(response: any) {
    console.log('Token JWT:', response.credential);

    // Aqui você pode enviar o token JWT para o backend para validação
    // e depois navegar para o dashboard:
    this.router.navigate(['/dashboard']);
  }

  navigateCadastro() {
    this.router.navigate(['/cadastro']);
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateForgot() {
    this.router.navigate(['/forgot']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
