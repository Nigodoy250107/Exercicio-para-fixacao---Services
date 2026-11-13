import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonDetails } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly pokemonService = inject(PokemonService);
  pokemon: PokemonDetails | null = null;
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isInteger(id) || id < 1) { this.errorMessage = 'Identificador de Pokémon inválido.'; this.loading = false; return; }
    this.pokemonService.getPokemonDetails(id).subscribe({
      next: (pokemon) => { this.pokemon = pokemon; this.loading = false; },
      error: (error: Error) => { this.errorMessage = error.message; this.loading = false; }
    });
  }

  get imageUrl(): string {
    return this.pokemon?.sprites.other?.['official-artwork']?.front_default || this.pokemon?.sprites.front_default || '';
  }

  formatName(name: string): string { return name.charAt(0).toUpperCase() + name.slice(1); }
  heightInMeters(height: number): string { return (height / 10).toFixed(1); }
  weightInKg(weight: number): string { return (weight / 10).toFixed(1); }

  handleImageError(event: Event): void {
    const image = event.target as HTMLImageElement;
    const fallback = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon?.id}.png`;
    if (this.pokemon && image.src !== fallback) image.src = fallback;
  }
}
