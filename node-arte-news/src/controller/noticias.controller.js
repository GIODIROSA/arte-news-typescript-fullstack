const { pool } = require("../service/server");
const multer = require("multer");

const getNoticias = async (req, res) => {
  try {
    let consulta = "SELECT * FROM noticias ORDER BY noticia_id ASC";

    const { rows } = await pool.query(consulta);
    res.json(rows);
  } catch (error) {
    console.error("ERROR en la query: ", error);
    res.status(500).send("Error al obtener las noticias");
  }
};

const getNoticia = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM noticias WHERE noticia_id = $1",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).send({ message: "Noticias no encontrada" });
    }

    res.send(rows[0]);
  } catch (error) {
    console.error("Error al recuperar la noticia:", error);
    res.status(500).send({ message: "Error al procesar la solicitud" });
  }
};

const uploadImagen = async (req, res) => {
  try {
    const originalFileName = req.file.originalname;

    const noticia_imagen = `uploads/${originalFileName}`;

    console.log("=>", noticia_imagen);

    res.status(200).json({
      success: true,
      message: "Imagen de la noticia agregada con éxito",
    });
  } catch (error) {
    console.error("Error al cargar la imagen:", error);

    res.status(500).json({
      success: false,
      error:
        error instanceof Error ? error.message : "Error interno del servidor",
    });
  }
};

module.exports = {
  getNoticias,
  getNoticia,
  uploadImagen,
};
