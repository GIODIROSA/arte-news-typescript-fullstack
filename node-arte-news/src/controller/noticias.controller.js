const { pool } = require("../service/server");

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
    const { rows } = await pool.query("SELECT * FROM noticias WHERE noticia_id = $1", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).send({ message: "Noticias no encontrada" });
    }

    res.send(rows[0]);
  } catch (error) {
    console.error("Error al recuperar la noticia:", error);
    res.status(500).send({ message: "Error al procesar la solicitud" });
  }
};



module.exports = {
  getNoticias,
  getNoticia,
};
