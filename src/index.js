const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/db.config");
const httpConfig = require("./config/http.config");
const db = require("./models");
const routes = require("./module/routes");
const boot = require("./boot");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routes);

db.mongoose.connect(dbConfig.connectionUrl).then(async () => {
  await boot();
  app.listen(httpConfig.port, httpConfig.host, () => {
    console.log(`Server is running on http://${httpConfig.host}:${httpConfig.port}`);
  });
});