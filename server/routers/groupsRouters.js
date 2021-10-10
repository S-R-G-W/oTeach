var groupController = require("../controllers/groupsControllers");
var groupRouter = require("express").Router();

groupRouter
  .route("/group")
  .post(groupController.create)
  .get(groupController.retrieve);

groupRouter
  .route("/group/:id")
  .get(groupController.retrieveOne)
  .put(groupController.update);
module.exports = groupRouter;
