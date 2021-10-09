var lecturesController = require("../controllers/lecturesControllers");
var lectureRouter = require("express").Router();


lectureRouter.route("/lecture").get(lecturesController.retrieve);

lectureRouter.route("/lecture/:id").get(lecturesController.retrieveOne);

module.exports = lecturesController;