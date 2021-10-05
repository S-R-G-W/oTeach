const mongoose = require("mongoose");
const client = require("../database");
mongoose.Promise = global.Promise;

const usersSchema = mongoose.Schema({});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
