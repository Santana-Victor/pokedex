import { create } from "zustand";

import PokemonDataProps from "../types/PokemonDataProps";

type usePokemonDataProps = {
  pokemonData: PokemonDataProps;
  setPokemonData: (pokemonData: PokemonDataProps) => void;
};

const usePokemonData = create<usePokemonDataProps>((set) => ({
  pokemonData: {},
  setPokemonData: (pokemonData) => set(() => ({ pokemonData: pokemonData })),
}));

export default usePokemonData;
