import React, { Component } from "react";
import axios from "axios";

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
      .post("http://localhost:8000/user/signup", this.state)
      .then((data) => {
        if (data.data) {
          this.props.signup(data.data);
        }
      })
      .catch((err) => {
        alert("username or email already exist");
      });
  }

  render() {
    return (
      <div className="App">
        <div>SIGNUP</div>
        
        <input
          type="text"
          placeholder="Username..."
          name="username"
          onChange={this.handleChange}
        />
        <br />
        
        <input
          type="text"
          placeholder="Email..."
          name="email"
          onChange={this.handleChange}
        />
        <br />
        
        <input type="password" placeholder="Password..." name="password" onChange={this.handleChange} />
        <br />
        <button onClick={this.signupToDataBase}>Submit</button>
      </div>
    );
  }
}
