
import React, { Component } from 'react'
import axios from 'axios'

export default class signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.signupToDataBase = this.signupToDataBase.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signupToDataBase() {
    axios.post("http://localhost:8000/user/signup",this.state)
    .then((response) => {console.log(response)})
    .catch((err)=>{console.log(err)})
  }

  render() {
    return (
      <div>
        <label>Your name here :</label>
        <input
          type="text"
          placeholder="Username..."
          name="username"
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
