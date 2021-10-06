const express = require("express");
const app = express();
const db = require("../database/database");
const cors = require("cors");

const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});
