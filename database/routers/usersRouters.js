var usersController = require("../controllers/usersController");
var usersRouter = require("express").Router();

usersRouter.route("/user")
  .get(usersController.retrieve)
  .post(usersController.create);

usersRouter.route("/user/:name")
.get(usersController.retrieveOne);



module.exports = usersRouter;