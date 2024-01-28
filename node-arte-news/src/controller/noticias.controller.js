const { pool } = require("../service/server");

const obtenerNoticias = async (req, res) => {
  try {
    let consulta = "SELECT * FROM noticias ORDER BY noticia_id ASC";
    const { rows } = await pool.query(consulta);
    res.json(rows);
  } catch (error) {
    console.error("ERROR en la query: ", error);
    res.status(500).send("Error al obtener las noticias");
  }
};

module.exports = {
  obtenerNoticias,
};
