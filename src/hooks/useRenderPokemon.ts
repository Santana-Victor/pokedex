import RenderPokemonProps from "../types/RenderPokemonProps";

import usePokemonId from "../store/PokemonId";
import usePokemonData from "../store/PokemonData";

export default function useRenderPokemon() {
  const setPokemonId = usePokemonId((state) => state.setPokemonId);
  const setPokemonData = usePokemonData((state) => state.setPokemonData);

  const renderPokemon = async ({
    pokemonNameOrId,
    getPokemonData,
  }: RenderPokemonProps) => {
    try {
      const data = await getPokemonData(pokemonNameOrId);
      setPokemonId(data.id);
      setPokemonData({
        id: data.id,
        name: data.name,
        image:
          data.sprites.versions?.["generation-v"]["black-white"].animated
            ?.front_default,
      });
    } catch (error) {
      console.log(error);
      setPokemonData({
        id: 0,
        name: "Not found",
        image: "",
      });
    }
  };
  return {
    renderPokemon,
  };
}
