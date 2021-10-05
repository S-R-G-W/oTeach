const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Wissem:brinis@brinisdatabase.gedvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(() => {
  // perform actions on the collection object
  console.log("database connected SRGW");
});

module.exports = client;
