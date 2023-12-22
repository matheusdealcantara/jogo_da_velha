import React from "react";

// Importando as rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando as páginas da aplicação
import Home from "./pages/Home";
import { Singleplayer } from "./pages/Singleplayer";
import { Multiplayer } from "./pages/Multiplayer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/um-jogador",
    element: <Singleplayer />,
  },
  {
    path: "/dois-jogadores",
    element: <Multiplayer />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

