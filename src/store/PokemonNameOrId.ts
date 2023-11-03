import { create } from "zustand";

type usePokemonNameOrIdProps = {
  pokemonNameOrId: string;
  setPokemonNameOrId: (pokemonNameOrId: string) => void;
};

const usePokemonNameOrId = create<usePokemonNameOrIdProps>((set) => ({
  pokemonNameOrId: "",
  setPokemonNameOrId: (pokemonNameOrId) =>
    set(() => ({ pokemonNameOrId: pokemonNameOrId })),
}));

export default usePokemonNameOrId;
