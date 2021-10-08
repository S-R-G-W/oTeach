const express = require("express");
const app = express();
const db = require("./database/database");
const cors = require("cors");
const usersRouter = require("./routers/usersRouters");
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", usersRouter);

app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});
