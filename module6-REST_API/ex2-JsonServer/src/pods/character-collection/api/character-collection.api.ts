import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

let characterCollection;
const charactersUrl = 'api/characters';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<CharacterEntityApi[]>(charactersUrl);
  characterCollection = data;
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
