import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" routerLink="/" aria-label="Voltar para a Pokédex">
          <span class="brand-mark" aria-hidden="true"><span></span></span>
          <span>Pokédex</span>
        </a>
        <span class="header-caption">Conheça todos eles</span>
      </div>
    </header>
    <main class="page-shell"><router-outlet></router-outlet></main>
    <footer class="site-footer">Dados fornecidos pela <a href="https://pokeapi.co/" target="_blank" rel="noopener">PokéAPI</a></footer>
  `
})
export class AppComponent {}
