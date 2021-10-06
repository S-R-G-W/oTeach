const { response } = require("express");
const Users = require("../models/usersModel");

exports.retrieve = function (req, res) {
  Users.find({})
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => res.status(400).send(err));
};

exports.retrieveOne = function (req, res) {
  Users.findOne({ name: req.params.name })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => res.status(500).send(err));
}

exports.create = function (req, res) {
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => res.status(400).send(err));
};

exports.update = function () {
  
};

exports.delete = function () {

};
