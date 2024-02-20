require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const routerNoticias = require("./routes/noticias.routes");
const config = require("./config/config");
const errorHandler = require("./error/error.handler");
const app = express();

app.use(cors());
app.use(logger("dev"));

app.use("/api", routerNoticias);

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${config.PORT}`);
});
