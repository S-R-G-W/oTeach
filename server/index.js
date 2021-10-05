const express = require("express");
const app = express();
const db = require("../database/database");

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, "../public"));


app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});