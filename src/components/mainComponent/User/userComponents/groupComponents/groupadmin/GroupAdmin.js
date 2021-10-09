import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lecture from "../groupadmin/createLecture/Lecture";

export default class GroupAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      members: [],
      requests: [],
    };
  }

  deleteGroup() {}

  getmembers() {
    var memberarr = [];
    this.props.group.membersId
      .map((userId) => {
        axios
          .get(`http://localhost:8000/user/${userId}`)
          .then((data) => memberarr.push(data.data));
      })
      .then(() =>
        this.setState({
          members: memberarr,
        })
      );
  }
  getlectures() {
    var lecturearr = [];
    this.props.group.lecturesId
      .map((lectureId) => {
        axios
          .get(`http://localhost:8000/lecture/${lectureId}`)
          .then((data) => lecturearr.push(data.data));
      })
      .then(() =>
        this.setState({
          lectures: lecturearr,
        })
      );
  }
  getrequests() {
    var requestsarr = [];
    this.props.group.requestsId
      .map((requestId) => {
        axios
          .get(`http://localhost:8000/user/${requestId}`)
          .then((data) => requestsarr.push(data.data));
      })
      .then(() =>
        this.setState({
          requests: requestsarr,
        })
      );
  }

  render() {
    return (
      <div>
        <Lecture group={this.props.group} />
        <div className="App">
          <h1>{this.props.group.name}</h1>
          <button>Delete Group</button>
        </div>
      </div>
    );
  }
}
