import { CharacterApi } from './character.api-model';
import Axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = async (id: number): Promise<CharacterApi> => {
  const { data } = await Axios.get<CharacterApi>(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (
  character: CharacterApi
): Promise<boolean> => {
  return true;
};
