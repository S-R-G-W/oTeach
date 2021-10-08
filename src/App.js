import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import Login from "./components/Login.js";
import Profil from "./components/Profil.js";
import UpdateProfil from "./components/Update";
import Lecture from "./components/Lecture";
import Home from "./components/Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "signup",
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
    } else if (view === "signup") {
      return <SignUp />;
    } else if (view === "login") {
      return <Login />;
    } else if (view === "profil") {
      return (
        <div>
          <div>
            <Profil
              changepattolectur={this.changepattolectur.bind(this)}
              changepattoupdate={this.changepattoupdate.bind(this)}
              pathtoupdate={this.state.view}
            />
          </div>
        </div>
      );
    } else if (this.state.view === "update") {
      return (
        <UpdateProfil changepattoprofil={this.changepattoprofil.bind(this)} />
      );
    } else if (this.state.view === "lecture") {
      return <Lecture changepattoprofil={this.changepattoprofil.bind(this)} />;
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
