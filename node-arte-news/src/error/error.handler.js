const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send("Se ha producido un error en el servidor");
};

module.exports = errorHandler;
