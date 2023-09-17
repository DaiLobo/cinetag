import { Banner } from "components/Banner";
import { Titulo } from "components/Titulo";
import { Card } from "components/Card";

import { useFavoritos } from "context/Favoritos";

import styles from "./Favoritos.module.css";

export const Favoritos = () => {
  const { favorito } = useFavoritos();
  console.log(favorito)
  return (
    <>
      <Banner imagem="favorito" />

      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {favorito?.length > 0 ?
          favorito?.map((fav) => (
          <Card key={fav.id} {...fav} />
        )) :
        <p style={{ marginTop: 100 }}>Não existe favoritos ainda, volte e escolha um card</p>
        }
      </section>
    </>
  );
};
