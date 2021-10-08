const mongoose = require("mongoose");
const client = require("../database/database");
mongoose.Promise = global.Promise;

const groupsSchema = mongoose.Schema({
  name: { type: String, unique: true },
  membersNumber: Number,
  lecturesNumber: Number,
  adminId: String,
  membersId: [String],
  lecturesId: [String],
  requestsId: [String],
});

const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
