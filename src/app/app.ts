import { Component} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ThemeSelector } from "./theme-selector/theme-selector";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ThemeSelector],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
}
