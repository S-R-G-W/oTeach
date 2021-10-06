import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.signupToDataBase = this.signupToDataBase.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signupToDataBase() {
    axios
      .post("http://localhost:3000/user", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <SignUp
          handleChange={this.handleChange}
          signupToDataBase={this.signupToDataBase}
        />
      </div>
    );
  }
}
