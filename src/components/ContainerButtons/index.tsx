import styles from "./styles.module.css";

import useChangePokemonId from "../../hooks/useChangePokemonId";

export default function ContainerButtons() {
  const { prevPokemon, nextPokemon } = useChangePokemonId();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={prevPokemon}>
        Prev &lt;
      </button>
      <button className={styles.button} onClick={nextPokemon}>
        Next &gt;
      </button>
    </div>
  );
}
