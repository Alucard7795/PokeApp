import {Team} from '../interfaces/Team';
import {types} from '../types/types';

export const addTeam = (team: Team) => ({
  type: types.addTeam,
  payload: team,
});

export const deleteTeam = (team: Team[]) => ({
  type: types.deleteTeam,
  payload: team,
});
