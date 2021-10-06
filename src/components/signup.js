
import React, { Component } from 'react'
import axios from 'axios'

export default class signup extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signupToDataBase() {
    axios.post("http://localhost:8000/signup").then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
      <label>Your name here :</label>
      <input
        type="text"
        placeholder="Username..."
        name="name"
        onChange={this.handleChange}
      />
      <br />
      <label>Your Email here :</label>
      <input
        type="text"
        placeholder="Email..."
        name="email"
        onChange={this.handleChange}
      />
      <br />
      <label>Your Password here:</label>
      <input type="password" name="password" onChange={this.handleChange} />
      <br />
      <button onClick={this.signupToDataBase}>Submit</button>
    </div>
    )
  }
}
