var lectureController = require("../controllers/lecturesControllers");
var lectureRouter = require("express").Router();

lectureRouter.route("/").post(lectureController.create);

module.exports = lectureRouter;
