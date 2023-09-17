import styles from "./Card.module.css";
import iconeFavoritar from "../../assets/favoritar.png";
import iconeDesfavoritar from "../../assets/desfavoritar.png";

import { useFavoritos } from "context/Favoritos";
import { Link } from "react-router-dom";

export const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritos();
  const isFavorite = favorito.some((fav) => fav.id === id);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={isFavorite ? iconeDesfavoritar : iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      />
    </div>
  );
};
