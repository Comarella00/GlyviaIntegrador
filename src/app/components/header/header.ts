import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  SidebarOpen = false;

  toggleSidebar() {
      this.SidebarOpen = !this.SidebarOpen;
    }

  goToProfile() {
    // lógica para ir ao perfil
  }
}
