import React from "react";
import { NoticiasProvider } from "./context/NoticiasContext";
import Noticias from "./components/Noticias";

const App: React.FC = () => {
  return (
    <NoticiasProvider>
      <Noticias />
    </NoticiasProvider>
  );
};

export default App;
