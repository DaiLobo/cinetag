/* eslint-disable react-hooks/exhaustive-deps */
import { Banner } from "components/Banner";
import { Titulo } from "components/Titulo";

import { useParams } from "react-router-dom";

import styles from "./Player.module.css";

import { NotFound } from "pages/Notfound";
import { useEffect, useState } from "react";

export const Player = () => {
  const parametros = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`
    )
      .then((res) => res.json())
      .then((datas) => setVideo(...datas));
  }, []);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner imagem="player" />

      <Titulo>
        <h1>Player</h1>
      </Titulo>

      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};
