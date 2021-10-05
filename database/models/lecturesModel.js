const mongoose = require("mongoose");
const client = require("../database");
mongoose.Promise = global.Promise;

const lecturesSchema = mongoose.Schema({});

const Lectures = mongoose.model("lectures", lecturesSchema);

module.exports = Lectures;
