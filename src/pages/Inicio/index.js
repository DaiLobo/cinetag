import { Banner } from "components/Banner";
import { Card } from "components/Card";
import { Titulo } from "components/Titulo";

import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";

export const Inicio = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/monicahillman/cinetag-api/videos"
    )
      .then((res) => res.json())
      .then((datas) => setVideos(datas));
  }, []);
  return (
    <>
      <Banner imagem="home" />

      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
        {videos?.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
    </>
  );
};
