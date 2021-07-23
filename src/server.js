require("dotenv/config");

const express = require("express");
const database = require("./database/index");
const requireDir = require("require-dir");

const app = express();

database.connect();
requireDir("./models");

app.use(express.json());

app.use(`/api/${process.env.VERSION}`, require("./routes"));

app.listen(
  process.env.PORT,
  console.log(`Server Started on port ${process.env.PORT}`)
);
