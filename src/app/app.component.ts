import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/Components/organisms/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="relative]">
      <router-outlet />
    </main>
    <footer></footer>
  `,
})
export class AppComponent {
  title = 'Hola mundo';
}
