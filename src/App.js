import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/mainComponent/signup/signup.js";
import Login from "./components/mainComponent/login/Login.js";
import User from "./components/mainComponent/User/User";
import Header from "./components/Header.js";
// import Home from "./components/mainComponent/home/Home";
import CreateGroups from "./components/mainComponent/User/userComponents/createGroup/createGroups";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "login",
      navView: "",
      user: {},
    };

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.renderNavView = this.renderNavView.bind(this);
    this.changeNavView = this.changeNavView.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  signup(data) {
    this.setState({
      view: "user",
      user: data,
    });
  }

  login(data) {
    this.setState({
      view: "user",
      user: data,
    });
  }

  renderNavView() {
    // const { navView } = this.state;
    return <Header />;
  }
  changeNavView(option) {
    this.setState({
      navView: option,
    });
  }

  renderView() {
    const view = this.state.view;
    if (view === "signup") {
      return <SignUp signup={this.signup} />;
    } else if (view === "login") {
      return <Login login={this.login} />;
    } else if (view === "user") {
      return <User user={this.state.user} test={this.changeView} />;
    } else {
      return <CreateGroups user={this.state.user} />;
    }
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderNavView()}</div>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}
