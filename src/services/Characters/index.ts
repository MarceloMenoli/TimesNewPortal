import { Character, CharacterPage } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api/";

export const fetchCharacters = async (page: number): Promise<CharacterPage> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: '',
      },
      results: [],
    };
  }
};

export async function fetchCharacterById(
  id: number
): Promise<Character | undefined> {
  const response = await fetch(`${BASE_URL}/character/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch character.");
  }
  const data = await response.json();
  return data[0];
}
