var usersController = require("../controllers/usersController");
var usersRouter = require("express").Router();

usersRouter.route("/signup").post(usersController.create);

usersRouter.route("/login").post(usersController.authentication);


module.exports = usersRouter;

