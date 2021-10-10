var lecturesController = require("../controllers/lecturesControllers");
var lectureRouter = require("express").Router();

lectureRouter.route("/")
.get(lecturesController.retrieve)
.post(lecturesController.create)

lectureRouter.route("/:id")
.get(lecturesController.retrieveOne);



module.exports = lectureRouter;
