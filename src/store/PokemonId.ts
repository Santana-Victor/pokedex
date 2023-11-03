import { create } from "zustand";

type usePokemonIdProps = {
  pokemonId: number;
  setPokemonId: (pokemonId: number) => void;
};

const usePokemonId = create<usePokemonIdProps>((set) => ({
  pokemonId: 1,
  setPokemonId: (pokemonId) => set(() => ({ pokemonId: pokemonId })),
}));

export default usePokemonId;
