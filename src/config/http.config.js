require('dotenv').config();
const httpConfig = {
  port: process.env.HTTP_PORT,
  host: process.env.HTTP_HOST
};

module.exports = httpConfig;
