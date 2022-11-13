import {useEffect, useState} from 'react';
import {reqResApi} from '../api/reqRes';
import {Team} from '../interfaces/Team';

export const usePokedexFetch = (url: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [simplePokemonList, setsimplePokemonList] = useState<Team[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const resp = await reqResApi.get<any>(url);
      if (resp.data) {
        mapPokemonList(resp.data.pokemon_entries);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mapPokemonList = (pokemonList: any[]) => {
    const newPokemonList: Team[] = pokemonList.map(({pokemon_species}) => {
      const id = pokemon_species.url.slice(42, 80).replace('/', '');
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, picture, pokemon_species};
    });
    setsimplePokemonList(newPokemonList);
    setisLoading(false);
  };

  return {
    simplePokemonList,
    isLoading,
  };
};
