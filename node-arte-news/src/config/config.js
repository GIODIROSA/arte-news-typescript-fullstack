const dotenv = require("dotenv");

dotenv.config();

const config = {
  PORT: process.env.PORT || 3002,
};

module.exports = config;
