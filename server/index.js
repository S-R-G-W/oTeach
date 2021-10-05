const express = require("express");
const app = express();
const db = require("../database/database");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("server is connected");
});
