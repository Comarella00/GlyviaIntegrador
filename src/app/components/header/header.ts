import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Sidebar} from '../sidebar/sidebar';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  constructor(private router: Router,
  public themeService: ThemeService) {}

  goToProfile() {
    console.log('clicou no botão');
    this.router.navigate(['/profile']);
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
