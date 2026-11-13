import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { PokemonDetails, PokemonListResponse } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemons(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=20`).pipe(
      catchError(() => throwError(() => new Error('Não foi possível carregar a lista de Pokémon. Tente novamente.')))
    );
  }

  getPokemonDetails(id: number): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => throwError(() => new Error('Pokémon não encontrado ou indisponível no momento.')))
    );
  }
}
