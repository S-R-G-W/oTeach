import axios from "axios";
import {Link } from "react-router-dom";
import React, { Component } from "react";

export default class CreateGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      adminId: this.props.user._id,
      // userMembers: this.props.adminId.createdGroupsId,
    };
    this.createGroup = this.createGroup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.setAdminId = this.setAdminId.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 
  createGroup() {
    if(this.state.name!==''){
      axios.post("http://localhost:8000/group/group", this.state)
      .then((data)=>this.props.fetch())
      .catch((err) => alert('error creating the group'))
    }
    else{
      alert('empty field')
    }
    
  }

  render() {
    return (
      <div className="App">
        <input
        value={this.state.name}
          type="text"
          name="name"
          placeholder="Group name here !"
          onChange={this.handleChange}
        />
        <Link to="/">
           <button
          onClick={() => {this.createGroup()}}>
          Create
        </button>
        </Link>
      </div>
    );
  }
}
