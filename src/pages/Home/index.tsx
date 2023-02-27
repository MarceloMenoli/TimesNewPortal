import { CharacterList } from "../../components/CharacterList";
import { useCharacters } from "../../hooks/useCharecters";

export const Home = () => {
  const { data, isLoading, isError, error } = useCharacters(1);

  return (
    <CharacterList
      data={data}
      error={error}
      isError={isError}
      isLoading={isLoading}
    />
  );
};
