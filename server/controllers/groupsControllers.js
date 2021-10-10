
const Groups = require("../models/groupsModel");
const user = require("../models/usersModel");

exports.retrieve = function (req, res) {
  Groups.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.retrieveOne = function (req, res) {
  Groups.findOne({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.create = function (req, res) {
  const newGroup = new Groups(req.body);
  let groupData;
  let userMembers;
  newGroup.save()
    .then((res) => (groupData = res))
    .then(() => user.findOne({ _id: groupData.adminId }))
    .then((res) => (userMembers = res.createdGroupsId))
    .then(() => {
      userMembers.push(groupData._id);
    })
    .then(() =>
      user.findByIdAndUpdate(
        { _id: groupData.adminId },
        { createdGroupsId: userMembers }
      )
    )
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
