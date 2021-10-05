const mongoose = require("mongoose");
const client = require("../database");
mongoose.Promise = global.Promise;

const groupsSchema = mongoose.Schema({});

const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
