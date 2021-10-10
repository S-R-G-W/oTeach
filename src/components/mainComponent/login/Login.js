import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.hundleLogin = this.hundleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hundleLogin() {
    if (this.state.email !== "" && this.state.password !== "") {
      axios
        .post("http://localhost:8000/user/login", this.state)
        .then((user) => {
          if (user.data) {
            this.props.login(user.data);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h3>LOGIN</h3>
        </div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button className="btn btn-big btn-style-5" onClick={this.hundleLogin}>
          Login
        </button>
      </div>
    );
  }
}
