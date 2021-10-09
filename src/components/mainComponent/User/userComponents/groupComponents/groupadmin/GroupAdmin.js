import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lecture from "../groupadmin/createLecture/Lecture";

export default class GroupAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      members: [],
      requests: [],
      group: this.props.group,
    };
    this.getlectures = this.getlectures.bind(this);
  }

  componentDidMount() {
    this.getlectures();
  }

  getmembers() {
    var memberarr = [];
    this.state.group.membersId
      .map((userId) =>
        axios
          .get(`http://localhost:8000/user/${userId}`)
          .then((data) => memberarr.push(data.data))
      )
      .then(() =>
        this.setState({
          members: memberarr,
        })
      );
  }
  getlectures() {
    var lecturearr = [...this.state.lectures];
    this.state.group.lecturesId.map((lectureId) => {
      axios
        .get(`http://localhost:8000/lecture/${lectureId}`)
        .then((data) => lecturearr.push(data.data));
    });
    return lecturearr;
  }
  getrequests() {
    var requestsarr = [];
    this.state.group.requestsId.map((requestId) => {
      axios
        .get(`http://localhost:8000/user/${requestId}`)
        .then((data) => requestsarr.push(data.data));
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/create lecture">
            <Lecture group={this.props.group} />
            <Link to="/">back to group</Link>
          </Route>
          <Route path="/see lecture">
            <LectureDisplay group={this.props.group} />
            <Link to="/">back to group</Link>
          </Route>
          <Route path="/">
            <div className="App">
              <h1>{this.props.group.name}</h1>
              <Link to="create lecture">create lecture</Link>
              <div></div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
