import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  navigatePerguntas() {
    this.router.navigate(['/bemvindo']);
  }
}
