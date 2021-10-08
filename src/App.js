import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import Login from "./components/Login.js";
import Profil from "./components/Profil.js";

import Nav from "./components/Nav.js";
import UpdateProfil from "./components/Update";
import Lecture from "./components/Lecture";
import Home from "./components/Home"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'signup'
    };

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
              changepattolectur={this.changepattolectur}
              changepattoupdate={this.changepattoupdate}

            />
          </div>
        </div>
      );
    }
    else if (view === "update") {
      return <UpdateProfil />;
    }
    else if (view === "lecture") {
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
