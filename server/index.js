const express = require("express");
const app = express();
const db = require("./database/database");
const cors = require("cors");
const usersRouter = require("./routers/usersRouters");
const groupRouter = require("./routers/groupsRouters");
const lectureRouter = require("./routers/lecturesRouters");
const morgan=require("morgan")
const port = 8000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", usersRouter);
app.use("/group", groupRouter);
app.use("/lecture", lectureRouter);

app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});
