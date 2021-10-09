var groupController = require("../controllers/groupsControllers");
var groupRouter = require("express").Router();

groupRouter
  .route("/group")
  .get(groupController.retrieve)
  .post(groupController.create);

groupRouter.route("/group/:id").get(groupController.retrieveOne);
module.exports = groupRouter;
