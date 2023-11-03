import { useEffect } from "react";

import usePokemonId from "../store/PokemonId";

import useGetPokemonData from "../hooks/useGetPokemonData";
import useRenderPokemon from "../hooks/useRenderPokemon";

export default function useStartRenderPokemon() {
  const pokemonId = usePokemonId((state) => state.pokemonId);
  const { getPokemonData } = useGetPokemonData();
  const { renderPokemon } = useRenderPokemon();

  useEffect(() => {
    renderPokemon({
      pokemonNameOrId: pokemonId.toString(),
      getPokemonData: getPokemonData,
    });
  }, [pokemonId, renderPokemon, getPokemonData]);
}
