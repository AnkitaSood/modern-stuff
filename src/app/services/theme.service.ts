import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly currentTheme = signal<'light' | 'dark'>(this.getInitialTheme());

  toggleTheme(): void {
    this.currentTheme.update(value => value === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', this.currentTheme());
  }

  private getInitialTheme(): 'light' | 'dark' {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}