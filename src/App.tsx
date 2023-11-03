import Main from "./components/Main";
import PokedexImage from "./components/PokedexImage";
import PokemonImage from "./components/PokemonImage";
import PokemonData from "./components/PokemonData";
import FormFetchPokemonData from "./components/FormFetchPokemonData";
import ContainerButtons from "./components/ContainerButtons";

import useStartRenderPokemon from "./hooks/useStartRenderPokemon";

export default function App() {
  useStartRenderPokemon();

  return (
    <>
      <Main>
        <PokedexImage />
        <PokemonImage />
        <PokemonData />
        <FormFetchPokemonData />
        <ContainerButtons />
      </Main>
    </>
  );
}
