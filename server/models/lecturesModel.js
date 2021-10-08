const mongoose = require("mongoose");
const client = require("../database/database");
mongoose.Promise = global.Promise;

const lecturesSchema = mongoose.Schema({
    name:{type:String, unique:true},
    description:String,
    videoUrl:String,
    groupId:String,
    isShowen:{type:Boolean, default:false}
});

const Lectures = mongoose.model("lectures", lecturesSchema);

module.exports = Lectures;
