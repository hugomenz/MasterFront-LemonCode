import Axios from 'axios';
import {
  CharacterEntityApi,
  GetResponse,
} from './character-collection.api-model';

let characterCollection;

const charactersUrl = 'https://rickandmortyapi.com/api/character/';
export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get<GetResponse>(charactersUrl);
  characterCollection = data.results;
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
