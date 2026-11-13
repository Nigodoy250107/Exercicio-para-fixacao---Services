import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', component: PokemonListComponent, title: 'Pokédex | Início' },
  { path: 'pokemon/:id', component: PokemonDetailsComponent, title: 'Pokédex | Detalhes' },
  { path: '**', redirectTo: '' }
];
