import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { FavoritosProvider } from "context/Favoritos";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <main>
        <Header />

        <FavoritosProvider>
          <Container>
            <Outlet />
          </Container>
        </FavoritosProvider>
      </main>
      <Footer />
    </>
  );
};
