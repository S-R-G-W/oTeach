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
  
  Groups.create(req.body)
  .then((data)=>{
    user.findOneAndUpdate(
      { _id: req.body.adminId }, 
      { $push: { createdGroupsId: data._id } },  
  ) 
  })
.then((r)=>res.status(201).send(r))
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
