import { FormEvent } from "react";

import RenderPokemonProps from "../types/RenderPokemonProps";
import { IPokemonDataProps } from "../interfaces/ResponseFetchPokemon";

import usePokemonNameOrId from "../store/PokemonNameOrId";

type UseHandleSubmitFetchPokemonProps = {
  renderPokemon: (renderPokemonProps: RenderPokemonProps) => void;
  getPokemonData: (pokemonNameOrId: string) => Promise<IPokemonDataProps>;
};

export default function useHandleSubmitFetchPokemon({
  renderPokemon,
  getPokemonData,
}: UseHandleSubmitFetchPokemonProps) {
  const [pokemonNameOrId, setPokemonNameOrId] = usePokemonNameOrId((state) => [
    state.pokemonNameOrId,
    state.setPokemonNameOrId,
  ]);

  const handleSubmitFetchPokemon = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    renderPokemon({
      pokemonNameOrId: pokemonNameOrId.toLowerCase(),
      getPokemonData: getPokemonData,
    });
    setPokemonNameOrId("");
  };
  return { handleSubmitFetchPokemon };
}
