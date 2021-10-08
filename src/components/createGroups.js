import axios from "axios";
import React, { Component } from "react";

export default class CreateGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.createGroup = this.createGroup.bind(this);
  }
  createGroup() {
    axios
      .post("http://localhost:8000/user/group", {
        name: this.state.name,
        // this adminId should be brought from the user that is logged in
        // adminId: this.state.adminId,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <input type="text" name="name" placeholder="Group name here !" />
        <button onClick={() => this.createGroup()}>Create</button>
      </div>
    );
  }
}
