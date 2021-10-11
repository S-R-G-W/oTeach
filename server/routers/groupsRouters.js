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

groupRouter.route("/group/accept/:id")
.put(groupController.updateAccept)

module.exports = groupRouter;


