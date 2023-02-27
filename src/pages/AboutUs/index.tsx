import { CharacterListMui } from "../../components/CharacterListMui";
const mockProps = [
  {
    id: 1,
    title: "Título",
    subtitle: "Subtítulo",
    description: "Descrição",
    tag: "Tag",
  },
  {
    id: 2,
    title: "Título",
    subtitle: "Subtítulo",
    description: "Descrição",
    tag: "Tag",
  },
  {
    id: 3,
    title: "Título",
    subtitle: "Subtítulo",
    description: "Descrição",
    tag: "Tag",
  },
];
export const AboutUs = () => {
  return (
    <div>
      <CharacterListMui items={mockProps} />
    </div>
  );
};
