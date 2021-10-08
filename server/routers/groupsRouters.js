var groupController = require("../controllers/groupsControllers");
var groupRouter = require("express").Router();

groupRouter.route("/group").post(groupController.create);

module.exports = groupRouter;
