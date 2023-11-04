import styles from "./styles.module.css";

import usePokemonData from "../../store/PokemonData";

export default function PokemonData() {
  const pokemonData = usePokemonData((state) => state.pokemonData);

  return (
    <h1 className={styles.pokemon_data}>
      <span>{pokemonData.id}</span> -{" "}
      <span className={styles.pokemon_name}>{pokemonData.name}</span>
    </h1>
  );
}
