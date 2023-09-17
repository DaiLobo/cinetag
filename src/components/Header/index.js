import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Header.module.css";
import { LinkHeader } from "components/LinkHeader";

export const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <LinkHeader url="./">Home</LinkHeader>
        <LinkHeader url="./favoritos">Favoritos</LinkHeader>
      </nav>
    </header>
  );
};
