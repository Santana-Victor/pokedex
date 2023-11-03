import usePokemonId from "../store/PokemonId";

export default function useChangePokemonId() {
  const [pokemonId, setPokemonId] = usePokemonId((state) => [
    state.pokemonId,
    state.setPokemonId,
  ]);

  const prevPokemon = () => {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    }
  };
  const nextPokemon = () => {
    setPokemonId(pokemonId + 1);
  };

  return {
    prevPokemon,
    nextPokemon,
  };
}
