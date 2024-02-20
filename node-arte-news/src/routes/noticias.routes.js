const express = require("express");
const {
  getNoticias,
  getNoticia,
  uploadImagen,
} = require("../controller/noticias.controller");
const { uploadMiddleware } = require("../middleware/middleware");

const routerNoticia = express.Router();

routerNoticia.get("/noticias", getNoticias);

routerNoticia.get("/noticias/:id", getNoticia);

routerNoticia.post(
  "/noticias/",
  uploadMiddleware.single("imagenArt"),
  uploadImagen
);

// routerNoticia.post("/", obtenerNoticias);

module.exports = routerNoticia;
