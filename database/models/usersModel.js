const mongoose = require("mongoose");
const client = require("../database");
mongoose.Promise = global.Promise;

const usersSchema = mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String, unique: true },
  createdGroupsId: [String],
  joinedGroupsId: [String],
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
