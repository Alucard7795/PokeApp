import {Reducer} from 'react';
import {Team} from '../interfaces/Team';
import {types} from '../types/types';

interface Action {
  type: string;
  payload: Team;
}

const initialState: Team[] = [];

export const teamReducer: Reducer<Team[], Action> = (
  state: Team[],
  action: Action,
): Team[] => {
  switch (action?.type) {
    case types.addTeam:
      const shoulPokemonSaved = state.find(({id}) => id === action.payload.id);

      if (shoulPokemonSaved) {
        return state.filter(team => team.id !== shoulPokemonSaved?.id);
      }
      if (state.length < 6) {
        return [...state, action.payload];
      }
      return state;

    case types.deleteTeam:
      return initialState;

    default:
      return state;
  }
};
