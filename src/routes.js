import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Inicio } from "./pages/Inicio";
import { Favoritos } from "pages/Favoritos";
import { Player } from "pages/Player";
import { NotFound } from "pages/Notfound";
import { Layout } from "pages/Layout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
