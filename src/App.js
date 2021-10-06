import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import Login from "./components/Login.js";
import Profil from "./components/Profil.js";
import axios from "axios";
import Nav from "./components/Nav.js";
import UpdateProfil from "./components/Update";
import Lecture from "./components/Lecture";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'login'
    };
    this.handleChange = this.handleChange.bind(this);
    this.signupToDataBase = this.signupToDataBase.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }
  changepattoupdate = () => {
    this.setState({
      view: "update",
    });
  };
  changepattolectur = () => {
    this.setState({
      view: "lecture",
    });
  };
  changepattoprofil = () => {
    this.setState({
      view: "profil",
    });
  };

  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return <Home test={this.changeView} />;
    }
    else if (view === "signup") {
      return <SignUp />;
    } 
    else if (view === "login") {
      return <Login />;
    } 
    else if (view === "profil") {
      return (
        <div>
          <div>
            <Nav changepattoprofil={this.changepattoprofil.bind(this)} />
          </div>
          <div>
            <Profil
              changepattolectur={changepattolectur}
              changepattoupdate={changepattoupdate}
              pathtoupdate={pathtoupdate}
            />
          </div>
        </div>
      );
    } 
    else if (pathtoupdate === "update") {
      return <UpdateProfil />;
    } 
    else if (pathtoupdate === "lecture") {
      return <Lecture />;
    } else {
      return <div>home page</div>;
    }
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }


  render() {
    return <div>{this.renderView()}</div>;
  }
}
