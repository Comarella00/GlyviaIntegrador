import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(private router: Router) {}

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateAddglicemia() {
    this.router.navigate(['/addglicemia']);
  }

  navigateContarcarboidratos(){
    this.router.navigate(['/contarcarboidratos']);
  }

  navigateHistorico() {
    this.router.navigate(['/historico']);
  }

  navigateRelatoriosgraficos() {
    this.router.navigate(['/relatoriosgraficos']);
  }

  navigateLembretes() {
    this.router.navigate(['/lembretes']);
  }

  navigateAlertas() {
    this.router.navigate(['/alertas']);
  }
}
