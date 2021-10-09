import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SignUp from "./components/mainComponent/signup/signup.js";
import Login from "./components/mainComponent/login/Login.js";
import User from "./components/mainComponent/User/User"
import Home from "./components/mainComponent/home/Home"
import Nav from "./components/navbar/navbarsimple/Nav";
import Nav2 from "./components/navbar/nav2/Nav2";
import Profil from './components/mainComponent/User/userComponents/Profile/Profil'
import UpdateProfile from './components/mainComponent/User/userComponents/Profile/update/UpdateProfile';
import CreateGroups from './components/mainComponent/User/userComponents/createGroup/createGroups';

import axios from 'axios'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      navView: "",
      user: {},

    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.renderNavView = this.renderNavView.bind(this);
    this.changeNavView = this.changeNavView.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.handleHome = this.handleHome.bind(this)

  }

  handleHome() {

  }



  signup(data) {
    this.setState({
      view: 'user',
      navView: 'user',
      user: data
    })
  }

  login(data) {
    this.setState({
      view: 'user',
      navView: 'user',
      user: data
    })
  }

  renderNavView() {
    const { navView } = this.state;
    if (navView === "user") {
      return <Nav2 handleHome={this.handleHome} />
    }
    else {
      return <Nav changeView={this.changeView} />;
    }

  }
  changeNavView(option) {
    this.setState({
      navView: option,
    });
  }

  renderView() {
    const view = this.state.view;
    console.log(view)
    if (view === "user") {
      return (<Switch>

        <Route path="/CreateGroup">
          <CreateGroups user={this.state.user} />
        </Route>
        <Route path="/Profile">
          <Profil user={this.state.user} />
        </Route>
        <Route path="/UpdateProfile">
          <UpdateProfile changeView={this.changeView}  user={this.state.user} />
        </Route>
        <Route path="/">
          <User user={this.state.user} />
        </Route>
      </Switch>)
    }
    else {
      return (<Switch>

        <Route path="/signup">
          <SignUp signup={this.signup} />
        </Route>
        <Route path="/login">
          <Login changeView={this.changeView} login={this.login} />
        </Route>
        <Route path="/">
          <Home user={this.state.user} />
        </Route>

      </Switch>)
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
          <nav>
            {this.renderNavView()}
          </nav>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {this.renderView()}
        </div>
      </Router>
    );
  }
}
