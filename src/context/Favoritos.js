import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  const adicionarFavorito = (novoFavorito) => {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista?.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  };

  return (
    <FavoritosContext.Provider
      value={{ favorito, setFavorito, adicionarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
