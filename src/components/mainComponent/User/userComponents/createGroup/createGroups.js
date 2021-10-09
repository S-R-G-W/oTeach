import axios from "axios";
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
  // userIsAdmin() {
  //   let array = this.state.userMembers;
  //   array.push()
  // }
  createGroup() {
    axios
      .post("http://localhost:8000/group/group", {
        name: this.state.name,
        // this adminId should be brought from the user that is logged in
        adminId: this.state.adminId,
      })
      .then((res) =>alert('group created'))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="name"
          placeholder="Group name here !"
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            // this.setAdminId();
            this.createGroup();
          }}
        >
          Create
        </button>
      </div>
    );
  }
}
