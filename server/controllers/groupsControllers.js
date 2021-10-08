const { response } = require("express");
const Groups = require("../models/groupsModel");

exports.retrieve = function (req, res) {
  Groups.find({})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.retrieveOne = function (req, res) {
  const id = req.params._id;
  Groups.findOne({ id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.create = function (req, res) {
  const newGroup = new Groups({
    name: req.body.name,
    membersNumber: req.body.membersNumber,
    lecturesNumber: req.body.lecturesNumber,
    adminId: req.body.adminId,
    membersId: req.body.membersId,
    lecturesId: req.body.lecturesId,
    requestsId: req.body.requestsId,
  });
  newGroup
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.update = function (req, res) {
  const id = req.params._id;
  Groups.updateOne({ _id: id }, req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  const id = req.params._id;
  Groups.deleteOne({ _id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
