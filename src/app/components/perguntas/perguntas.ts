import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-perguntas',
  imports: [
    Header

  ],
  templateUrl: './perguntas.html',
  styleUrl: './perguntas.css'
})
export class Perguntas {
  constructor(private router: Router) {}

  navigateGoBack() {
    this.router.navigate(['/bemvindo']);
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
