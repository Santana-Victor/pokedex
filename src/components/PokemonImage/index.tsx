import styles from "./styles.module.css";

import usePokemonData from "../../store/PokemonData";

export default function PokemonImage() {
  const pokemonData = usePokemonData((state) => state.pokemonData);

  return (
    <img
      className={styles.pokemon_image}
      src={pokemonData.image}
      alt={pokemonData.name}
    />
  );
}
