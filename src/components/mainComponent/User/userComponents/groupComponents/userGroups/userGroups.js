import React, { Component } from "react";
import axios from "axios";
export default class UserGroups extends Component {
  constructor() {
    super();
    this.state = {
      createdGroups: [],
      joinedGroups: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData(id) {
    axios.get(`http://localhost:8000/user/${id}`).then((response) => {
      console.log(response.data);

    //   this.setState({
    //     createdGroups: response.data.createdGroupsId,
    //     joinedGroups: response.data.joinedGroupsId,
    //   });
    });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <ul>
          <label>Created Groups :</label>
          <br />
          <li></li>
        </ul>
        <br />
        <ul>
          <label>Joined Groups :</label>
          <br />
          <li></li>
        </ul>
      </div>
    );
  }
}
