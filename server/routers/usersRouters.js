var usersController = require("../controllers/usersController");
var usersRouter = require("express").Router();

usersRouter.route("/signup").post(usersController.create);

usersRouter.route("/login").post(usersController.authentication);

usersRouter.route("/update/:userId").put(usersController.update);



usersRouter.route("/:id").get(usersController.retrieveOne);
usersRouter.route("/").get(usersController.retrieve);
module.exports = usersRouter;
