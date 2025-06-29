import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'space-misson-control';
  isDark = true;
}
