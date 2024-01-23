import React, { useContext, useEffect } from "react";
import NoticiasContext from "../context/NoticiasContext";
import { Noticia } from "../types/noticias";

const Noticias: React.FC = () => {
  const noticiasContext = useContext(NoticiasContext);

  useEffect(() => {
    noticiasContext?.cargarNoticias();
  }, [noticiasContext?.cargarNoticias]);

  const renderNoticias = () => {
    const { noticias } = noticiasContext || {};
    
    if (!noticias || noticias.length === 0) {
      return <p>No hay noticias disponibles.</p>;
    }

    return noticias.map((noticia: Noticia) => (
      <div key={noticia.noticia_id}>
        <h2>{noticia.titulo}</h2>
        <p>{noticia.resumen}</p>
        <p>{noticia.contenido}</p>
        <p>{noticia.fecha_publicacion}</p>
      </div>
    ));
  };

  return <div>{renderNoticias()}</div>;
};

export default Noticias;
