import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar />
    <main class="relative">
      <router-outlet />
    </main>
    <footer></footer>
  `,
})
export class AppComponent {
  title = 'Hola mundo';
}
