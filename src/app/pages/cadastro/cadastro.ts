import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  standalone: true,
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  constructor(private router: Router) {}

  showPassword: boolean = false;

  goBack() {
    this.router.navigate(['/']);
  }

  navigatePerguntas() {
    this.router.navigate(['/bemvindo']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
