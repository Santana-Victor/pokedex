import styles from "./styles.module.css";

import usePokemonNameOrId from "../../store/PokemonNameOrId";

export default function SearchPokemon() {
  const [pokemonNameOrId, setPokemonNameOrId] = usePokemonNameOrId((state) => [
    state.pokemonNameOrId,
    state.setPokemonNameOrId,
  ]);

  return (
    <input
      type={"search"}
      className={styles.search}
      placeholder={"Name or Number"}
      value={pokemonNameOrId}
      onChange={(event) => setPokemonNameOrId(event.target.value)}
      required
    />
  );
}
