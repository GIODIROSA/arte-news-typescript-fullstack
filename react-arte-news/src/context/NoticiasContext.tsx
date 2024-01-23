import { createContext, useState, useCallback, ReactNode } from "react";
import { Noticia, NoticiasContextType } from "../types/noticias";
import { getNoticias } from "../services/noticiasService";

const NoticiasContext = createContext<NoticiasContextType | undefined>(
  undefined
);

interface NoticiasProviderProps {
  children: ReactNode;
}

export const NoticiasProvider = ({ children }: NoticiasProviderProps) => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  const cargarNoticias = useCallback(async () => {
    try {
      const noticiasObtenidas = await getNoticias();
      setNoticias(noticiasObtenidas);
    } catch (error) {
      console.error("ERROR al cargar noticias:", error);
    }
  }, []);

  return (
    <NoticiasContext.Provider value={{ noticias, cargarNoticias }}>
      {children}
    </NoticiasContext.Provider>
  );
};

export default NoticiasContext;
