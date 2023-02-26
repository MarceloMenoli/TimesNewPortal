import { useQuery } from "react-query";
import { CharacterPage } from "../services/Characters/types";
import { fetchCharacters } from "../services/Characters";

export const useCharacters = (page: number) => {
  return useQuery<CharacterPage, Error>(["characters", page], () =>
    fetchCharacters(page)
  );
};
