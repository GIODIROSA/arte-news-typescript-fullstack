require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routerNoticias = require("./routes/noticias.routes");
const app = express();

app.use(cors());
app.use(logger("dev"));

app.use("/api/noticias", routerNoticias);

/**
 *
 * PORT
 *
 */

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
