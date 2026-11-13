import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonListItem } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService);
  pokemons: PokemonListItem[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void { this.loadPokemons(); }

  loadPokemons(): void {
    this.loading = true;
    this.errorMessage = '';
    this.pokemonService.getPokemons().subscribe({
      next: (response) => { this.pokemons = response.results; this.loading = false; },
      error: (error: Error) => { this.errorMessage = error.message; this.loading = false; }
    });
  }

  getId(url: string): number {
    const parts = url.split('/').filter(Boolean);
    return Number(parts[parts.length - 1]);
  }

  getImage(url: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.getId(url)}.png`;
  }

  handleImageError(event: Event, url: string): void {
    const image = event.target as HTMLImageElement;
    const id = this.getId(url);
    if (!image.src.endsWith(`/sprites/pokemon/${id}.png`)) {
      image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
  }

  formatName(name: string): string { return name.charAt(0).toUpperCase() + name.slice(1); }
}
