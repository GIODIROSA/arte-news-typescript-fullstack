const express = require("express");
const { obtenerNoticias } = require("../controller/noticias.controller");

const routerNoticia = express.Router();

routerNoticia.get("/", obtenerNoticias);

module.exports = routerNoticia;
