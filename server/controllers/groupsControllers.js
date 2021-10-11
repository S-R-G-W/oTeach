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
  .then((data)=>{console.log(data)})
    .then((data) => (groupData = data))
    .then(() => user.findOne({ _id: groupData.adminId }))
    .then((user) => (userMembers = user.createdGroupsId))
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
  console.log(req.params, req.body);
  const id = req.params.id;
  Groups.findByIdAndUpdate(id, { requestsId: req.body.arr ,membersId:req.body.arr1 })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

exports.delete = function (req, res) {
  const id = req.params._id;
  Groups.deleteOne({ _id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
