import { IPokemonDataProps } from "../interfaces/ResponseFetchPokemon";

type RenderPokemonProps = {
  pokemonNameOrId: string;
  getPokemonData: (pokemonNameOrId: string) => Promise<IPokemonDataProps>;
};

export default RenderPokemonProps;
