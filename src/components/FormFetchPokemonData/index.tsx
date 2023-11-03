import styles from "./styles.module.css";

import SearchPokemon from "../SearchPokemon";

import useGetPokemonData from "../../hooks/useGetPokemonData";
import useRenderPokemon from "../../hooks/useRenderPokemon";
import useHandleSubmitFetchPokemon from "../../hooks/useHandleSubmitFetchPokemon";

export default function FormFetchPokemonData() {
  const { getPokemonData } = useGetPokemonData();
  const { renderPokemon } = useRenderPokemon();
  const { handleSubmitFetchPokemon } = useHandleSubmitFetchPokemon({
    renderPokemon: renderPokemon,
    getPokemonData: getPokemonData,
  });
  return (
    <form className={styles.form} onSubmit={handleSubmitFetchPokemon}>
      <SearchPokemon />
    </form>
  );
}
