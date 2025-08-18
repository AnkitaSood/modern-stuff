import { afterEveryRender, Component, computed, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  imports: [MatIconButton, MatIcon],
  templateUrl: './theme-selector.html',
  styleUrl: './theme-selector.css'
})
export class ThemeSelector {
  private themeService = inject(ThemeService);

  protected currentTheme = computed(() => this.themeService.currentTheme());

  constructor() {
    afterEveryRender({
      read: ()=> {
        if (this.currentTheme() === 'dark') {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
        } else {
          document.body.classList.remove('dark-theme');
          document.body.classList.add('light-theme');
        }
      }
    }); 
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
