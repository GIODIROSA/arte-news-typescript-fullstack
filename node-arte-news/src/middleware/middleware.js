const multer = require("multer");

const { storage } = require("../utils/utils");

const uploadMiddleware = multer({ storage: storage });

module.exports = {
  uploadMiddleware,
};
