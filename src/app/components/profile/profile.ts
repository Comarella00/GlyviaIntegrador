import { Component } from '@angular/core';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  openSection: string | null = null;

  constructor(private router: Router) {}

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }

  logout() {

    this.router.navigate(['/login']);
  }
}
