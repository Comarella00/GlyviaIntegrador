import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkTheme = false;
  private currentUserId: number | null = null;

  /** 🔹 Chame isso no login */
  setCurrentUser(userId: number) {
    this.currentUserId = userId;
    const savedTheme = localStorage.getItem(`theme_${userId}`);
    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    } else {
      this.disableDarkTheme();
    }
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.darkTheme ? this.enableDarkTheme() : this.disableDarkTheme();

    // 🔹 Salva tema por usuário logado
    if (this.currentUserId) {
      localStorage.setItem(
        `theme_${this.currentUserId}`,
        this.darkTheme ? 'dark' : 'light'
      );
    }
  }

  private enableDarkTheme(): void {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    this.darkTheme = true;
  }

  private disableDarkTheme(): void {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    this.darkTheme = false;
  }

  /** 🔹 Reseta tudo no logout */
  resetTheme(): void {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    this.darkTheme = false;
    this.currentUserId = null;
  }

  /** 🔹 Aplica o tema vindo do backend */
  applyUserTheme(theme: 'dark' | 'light', userId: number): void {
    this.currentUserId = userId;
    if (theme === 'dark') {
      this.enableDarkTheme();
    } else {
      this.disableDarkTheme();
    }
    localStorage.setItem(`theme_${userId}`, theme);
  }
}
