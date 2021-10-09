
const Lectures = require("../models/lecturesModel");

exports.retrieve = function (req, res) {
  Lectures.find({})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.retrieveOne = function (req, res) {
  const id = req.params._id;
  Lectures.findOne({ id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.create = function (req, res) {
  const newLecture = new Lectures(req.body);
  newLecture.save()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.update = function (req, res) {
  const id = req.params._id;
  Lectures.updateOne({ _id: id }, req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  const id = req.params._id;
  Lectures.deleteOne({ _id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
