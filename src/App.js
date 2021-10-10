import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SignUp from "./components/mainComponent/signup/signup.js";
import Login from "./components/mainComponent/login/Login.js";
import User from "./components/mainComponent/User/User";
import Home from "./components/mainComponent/home/Home";
import Nav from "./components/navbar/navbarsimple/Nav";
import Nav2 from "./components/navbar/nav2/Nav2";
import Profil from "./components/mainComponent/User/userComponents/Profile/Profil";
import UpdateProfile from "./components/mainComponent/User/userComponents/Profile/update/UpdateProfile";
import CreateGroups from "./components/mainComponent/User/userComponents/createGroup/createGroups";
import GroupAdmin from "./components/mainComponent/User/userComponents/groupComponents/groupadmin/GroupAdmin";
import GroupUser from "./components/mainComponent/User/userComponents/groupComponents/groupUser/GroupUser";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      navView: "",
      user: {},
      group: {},
      Createdgroups: [],
      JoinedGroups: [],
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.renderNavView = this.renderNavView.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this)
    this.handleGroup = this.handleGroup.bind(this)
    this.renderGroup = this.renderGroup.bind(this)
    this.fetch = this.fetch.bind(this)
    this.fetchGroups = this.fetchGroups.bind(this)
    this.getCreatedGroup = this.getCreatedGroup.bind(this)
    this.getJoinedGroup = this.getJoinedGroup.bind(this)

  }



  handleGroup(obj) {
    this.setState({
      group: obj,
    });
  }


  getCreatedGroup(id) {

    axios.get(`http://localhost:8000/group/group/${id}`).then((response) => {
      var copy = [...this.state.Createdgroups];
      copy.push(response.data);
      this.setState({
        Createdgroups: copy,
      })
    });
  }

  getJoinedGroup(id) {
    axios.get(`http://localhost:8000/group/group/${id}`).then((response) => {
      var copy1 = [...this.state.JoinedGroups];
      copy1.push(response.data);
      this.setState({
        JoinedGroups: copy1,
      });
    });
  }


  fetchGroups() {
    this.state.user.createdGroupsId.map((el) => {
      this.getCreatedGroup(el);
    });

    this.state.user.joinedGroupsId.map((el) => {
      this.getJoinedGroup(el);
    });
  }



  fetch() {

    axios.get(`http://localhost:8000/user/${this.state.user._id}`)
      .then((data) => {
        this.setState({
          user: data.data,
          view: "user",
          navView: "user",
          Createdgroups: [],
        JoinedGroups: [],
        })})
      .then(() => this.fetchGroups())
  }





  logout() {
    this.setState({
      view: 'home',
      navView: 'home',
      user: {},
      Createdgroups: [],
      JoinedGroups: [],
    })
  }
  signup(data) {
    this.setState({
      view: "user",
      navView: "user",
      user: data,
    })
    
    this.fetchGroups()

  }










  renderGroup() {
    if (this.state.group.adminId === this.state.user._id) {
      return <GroupAdmin group={this.state.group} />
    }
    else {
      return <GroupUser group={this.state.group} />
    }
  }

  renderNavView() {
    const { navView } = this.state;
    if (navView === "user") {
      return <Nav2 logout={this.logout} />
    }
    else {
      return <Nav changeView={this.changeView} />;
    }
  }


  renderView() {
    const view = this.state.view;
    if (view === "user") {
      return (
        <Switch>
          <Route path="/CreateGroup">
            <CreateGroups fetch={this.fetch} user={this.state.user} />
          </Route>
          <Route path="/Profile">
            <Profil user={this.state.user} />
          </Route>
          <Route path="/UpdateProfile">
            <UpdateProfile
              changeView={this.changeView}
              user={this.state.user} />
          </Route>
          <Route path="/group">{this.renderGroup}</Route>
          <Route path="/">
            <User JoinedGroups={this.state.JoinedGroups} Createdgroups={this.state.Createdgroups} handleGroup={this.handleGroup} user={this.state.user} />
          </Route>
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route path="/signup">
            <SignUp signup={this.signup} />
          </Route>
          <Route path="/login">
            <Login changeView={this.changeView} login={this.signup} />
          </Route>
          <Route path="/">
            <Home user={this.state.user} />
          </Route>
        </Switch>
      );
    }
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav>{this.renderNavView()}</nav>
       
          {this.renderView()}
        </div>
      </Router>
    );
  }
}
