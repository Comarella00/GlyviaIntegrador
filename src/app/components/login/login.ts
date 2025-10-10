import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

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
  navigateCadastro() {
    this.router.navigate(['/cadastro']);
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateForgot() {
    this.router.navigate(['/forgot']);
  }

}
