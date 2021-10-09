// const { MongoClient } = require("mongodb");
// const dotenv = require("dotenv");
// dotenv.config();
// const uri = "mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/oTeach";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect(() => {
//   // perform actions on the collection object
//   console.log("database connected SRGW");
// });

var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.URI;

var client = mongoose.connect(uri, () => {
  console.log("database connected SRGW ");
});

module.exports = client;
