import styles from "./Banner.module.css";

export const Banner = ({ imagem }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url("/assets/banner_${imagem}.png")` }}
    ></div>
  );
};
