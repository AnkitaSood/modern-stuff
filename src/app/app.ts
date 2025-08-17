import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('myapp');
  private themeService = inject(ThemeService);

  protected currentTheme = computed(() => this.themeService.currentTheme());

  afterRenderEffect() {
    if (this.themeService.currentTheme() === 'dark') {
      document.body.classList.add('dark-theme');
    } else document.body.classList.remove('dark-theme');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
