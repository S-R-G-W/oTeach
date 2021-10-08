
const Users = require("../models/usersModel");
const crypt= require("../../server/hash");

exports.retrieve = function (req, res) {
  Users.find()
    .then((data) => {res.send(data)})
    .catch((err) => res.status(400).send(err));
};

exports.retrieveOne = function (req, res) {
  Users.findOne({ email: req.params.email })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => res.status(500).send(err));
}

exports.create = function (req, res) {
  
  var salt = crypt.createRandom32String()
  var hashed= crypt.createHash(req.body.password,salt)
  console.log(req.body,hashed)
  const us= new Users({
    username: req.body.username,
    email: req.body.email,
    password: hashed,
    salt:salt,
  })
  us.save()
    .then((data) => {res.status(201).send(data)})
    .catch((err) => {res.status(404).send(err)});
};

exports.update = function (req,res) {
  Users.findByIdAndUpdate(req.params.id,{name: req.body.name, email: req.body.email, password: req.body.password,})
  .then((response)=>{res.status(202).send(response)})
  .catch((err) => res.status(400).send(err));
};

exports.delete = function (req,res) {
  Users.findByIdAndDelete(req.params.id)
  .then((response)=>{res.status(202).send(response)})
  .catch((err) => res.status(400).send(err));

};

exports.authentication = function(req,res){
  Users.findOne({ email: req.params.email })
    .then((user) => {
    if(crypt.compareHash(req.body.password,user.password,user.salt)){
      res.status(200).send(user,true)
    }
    else{
      res.status(401).send('wrong password')
    } 
    })
    .catch((err) => res.status(500).send('no such user'));
}
