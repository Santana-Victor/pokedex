import Image from "../../assets/images/pokedex.png";

import styles from "./styles.module.css";

export default function PokedexImage() {
  return <img className={styles.pokedex_image} src={Image} alt={"Pokédex"} />;
}
