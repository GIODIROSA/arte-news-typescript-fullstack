const { pool } = require("./servicio/server");

/**
 *
 * CONSULTA DE NOTICIAS
 *
 */

const getNoticias = async () => {
  try {
    let consulta = "SELECT * FROM noticias";
    const { rows } = await pool.query(consulta);

    return rows;
  } catch (error) {
    console.error("ERROR en la query: ", error);
    throw error;
  }
};

module.exports = {
  getNoticias,
};
