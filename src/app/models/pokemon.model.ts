export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { other?: { ['official-artwork']?: { front_default: string | null } }; front_default: string | null };
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  abilities: Array<{ ability: { name: string; url: string }; is_hidden: boolean; slot: number }>;
}
