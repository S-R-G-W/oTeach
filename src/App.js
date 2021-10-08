import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import Login from "./components/Login.js";
import Profil from "./components/Profil.js";
import UpdateProfil from "./components/Update";
import Lecture from "./components/Lecture";
import Home from "./components/Home";
import axios from "axios";
import CreateGroups from "./components/createGroups";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'login',
      navView: '',
      user: {}

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
      view: 'home',
      user: data
    })
  }

  login(data) {
    this.setState({
      view: 'home',
      user: data
    })
  }

  renderNavView() {
    // const { navView } = this.state;
   return <Header />
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
    }else if(view ==="createGroup"){
      <CreateGroups/>
    }
    else if (view === "login") {
      return <Login login={this.login} />;
    } else if (view === "profil") {
      return (
        <Profil changepattolectur={this.changeView} changepattoupdate={this.changeView} pathtoupdate={this.state.view} />
      )
    }
    else if (this.state.view === 'update') {
      return (
        <UpdateProfil changepattoprofil={this.changeView} />
      )
    }
    else if (this.state.view === 'lecture') {
      return (
        <Lecture changepattoprofil={this.changeView} />
      )
    }
    else {
      return <Home test={this.changeView} />;
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
    )
  }
}
