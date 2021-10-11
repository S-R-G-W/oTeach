const mongoose = require("mongoose");
const client = require("../database/database");
mongoose.Promise = global.Promise;

const groupsSchema = mongoose.Schema({
  name: { type: String, unique: true },
  membersNumber: { type: Number, default: 0 },
  lecturesNumber: { type: Number, default: 0 },
  adminId: String,
  membersId: {type:[String],default:[]}, 
  lecturesId: {type:[String],default:[]}, 
  requestsId:{type:[String],default:[]}, 
});

const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
