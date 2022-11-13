import {PokemonSpecies} from './Pokedex';

export interface Team {
  id: string;
  picture: string;
  pokemon_species: PokemonSpecies;
}

export interface TeamObject {
  [key: string]: TeamMap;
}

export interface TeamMap {
  name: string;
  team: Team[];
}
