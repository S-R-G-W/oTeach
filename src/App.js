import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import axios from "axios";
import Home from "./components/Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      name: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.signupToDataBase = this.signupToDataBase.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signupToDataBase() {
    axios.post("http://localhost:3000/signup").then((response) => {
      console.log(response);
    });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const view = this.state.view;
    if (view === "home") {
      return <Home test={this.changeView} />;
    } else if (view === "signup") {
      return <SignUp />;
    }
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("home")}>
            oTeach
          </span>
          <span
            className={
              this.state.view === "home" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("home")}
          ></span>
          <span
            className="nav-unselected"
            onClick={() => this.changeView("signup")}
          >
            SignUp
          </span>
          <span
      
            onClick={() => {
              this.changeView("login");
            }}
          >
            Login
          </span>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}
