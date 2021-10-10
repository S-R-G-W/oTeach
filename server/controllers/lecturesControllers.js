const Lectures = require("../models/lecturesModel");
const Group = require("../models/groupsModel");

exports.retrieve = function (req, res) {
  Lectures.find({})
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.retrieveOne = function (req, res) {
  const id = req.params.id;
  Lectures.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.create = function (req, res) {
  const newLecture = new Lectures(req.body);
  let lectureData;
  let groupArray;
  newLecture
    .save()
    .then((data) => (lectureData = data))
    .then(() => Group.findOne({ _id: lectureData.groupId }))
    .then((res) => (groupArray = res.lecturesId))
    .then(() => groupArray.push(lectureData._id))
    .then(() =>
      Group.findByIdAndUpdate(
        { _id: lectureData.groupId },
        { lecturesId: groupArray }
      )
    )
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
