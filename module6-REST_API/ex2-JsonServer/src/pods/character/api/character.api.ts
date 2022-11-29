import { CharacterApi } from './character.api-model';
import Axios from 'axios';

const charUrl = 'api/characters';

export const getCharacter = async (id: number): Promise<CharacterApi> => {
  const { data } = await Axios.get<CharacterApi>(`${charUrl}/${id}`);
  return data;
};

export const saveCharacter = async (
  character: CharacterApi
): Promise<boolean> => {
  if (character.id) {
    await Axios.put<CharacterApi>(`${charUrl}/${character.id}`, character);
  } else {
    await Axios.post<CharacterApi>(charUrl, character);
  }
  return true;
};
