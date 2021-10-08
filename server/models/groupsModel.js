const mongoose = require("mongoose");
const client = require("../database/database");
mongoose.Promise = global.Promise;

const groupsSchema = mongoose.Schema({
  name: { type: String, unique: true },
  membersNumber: { type: Number, default: 0 },
  lecturesNumber: { type: Number, default: 0 },
  adminId: String,
  membersId: [String],
  lecturesId: [String],
  requestsId: [String],
});

const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
