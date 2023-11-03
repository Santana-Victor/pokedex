import { IPokemonDataProps } from "../interfaces/ResponseFetchPokemon";

export default function useGetPokemonData() {
  const getPokemonData = async (pokemonNameOrId: string) => {
    const response: IPokemonDataProps = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
    return response;
  };
  return {
    getPokemonData,
  };
}
