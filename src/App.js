import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/mainComponent/signup/signup.js";
import Login from "./components/mainComponent/login/Login.js";
import User from "./components/mainComponent/User/User";
import Home from "./components/mainComponent/home/Home";
import Nav from "./components/navbar/navbarsimple/Nav";
import Nav2 from "./components/navbar/nav2/Nav2";
import axios from "axios";

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
      navView: "user",
      user: data,
    });
  }

  login(data) {
    this.setState({
      view: "user",
      navView: "user",
      user: data,
    });
  }

  renderNavView() {
    const { navView } = this.state;
    if (navView === "user") {
      return <Nav2 />;
    } else {
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
    if (view === "signup") {
      return <SignUp signup={this.signup} />;
    } else if (view === "login") {
      return <Login changeView={this.changeView} login={this.login} />;
    } else if (view === "user") {
      return <User changeView={this.changeView} user={this.state.user} />;
    } else {
      return <Home user={this.state.user} />;
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}
