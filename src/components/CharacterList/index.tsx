import { useCharacters } from "../../hooks/useCharecters";
import { Character } from "../../services/Characters/types";

type CharacterDetailsProps = {
  data: { results: Character[] } | undefined;
  isLoading?: any;
  isError?: any;
  error?: any;
};

export const CharacterList = ({
  data,
  isLoading,
  isError,
  error,
}: CharacterDetailsProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      {data?.results.map((character: Character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>{character.status}</p>
          <p>{character.species}</p>
        </div>
      ))}
    </div>
  );
};
