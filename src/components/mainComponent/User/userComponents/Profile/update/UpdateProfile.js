
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default class UpdateProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.hundleUpdate = this.hundleUpdate.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hundleUpdate(){
  axios.put(`http://localhost:8000/user/update/${this.props.user._id}`,this.state)
  .then((data)=>  {
    if(window.confirm('updated')){
      this.props.changeView('home')
    }
    else{
      this.props.changeView('home')
    }

})
  .catch((err)=>{alert(err)})
  }

  render() {
    return (
      <div className="App">
        <input
        value={this.state.username}
          type="text"
          placeholder="Username..."
          name="username"
          onChange={this.handleChange}
        />
        <br />
        <input
        value={this.state.email}
          type="text"
          placeholder="Email..."
          name="email"
          onChange={this.handleChange}
        />
        <br />
        <Link to="/login"><button onClick={this.hundleUpdate} >update</button></Link>
      </div>
    )
  }
}
