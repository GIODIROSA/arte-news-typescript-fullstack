const express = require("express");
const {
  getNoticias,
  getNoticia,
} = require("../controller/noticias.controller");

const routerNoticia = express.Router();

routerNoticia.get("/noticias", getNoticias);
routerNoticia.get("/noticias/:id", getNoticia);

// routerNoticia.post("/", obtenerNoticias);


module.exports = routerNoticia;
