require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();

const { getNoticias } = require("./consulta");

app.use(cors());
app.use(logger("dev"));

app.get("/noticias", async (req, res) => {
    try {
      const noticias = await getNoticias();
      res.json(noticias);
    } catch (error) {
      console.error("Error al obtener las noticias: ", error);
      res.status(500).send("Error al obtener las noticias");
    }
  });
  

/**
 *
 * PORT
 *
 */

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
