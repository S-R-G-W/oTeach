const mongoose = require("mongoose");
const client = require("../database/database");
mongoose.Promise = global.Promise;

const usersSchema = mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  createdGroupsId:{type:[String],default:[]} ,
  joinedGroupsId: {type:[String],default:[]} ,
  salt: String,
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
