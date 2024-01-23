export interface Noticia {
  noticia_id: number;
  titulo: "string";
  contenido: "string";
  fecha_publicacion: number;
  imagen_url: "string";
  resumen: "string";
}

export interface NoticiasContextType {
  noticias: Noticia[];
  cargarNoticias: () => void;
}


