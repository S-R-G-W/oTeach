import React, { Component } from "react";
import axios from "axios";
export default class UserGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:this.props.user,
      createdGroups: [],
      joinedGroups: [],
    };
    // this.getData = this.getData.bind(this);
  }

  // getData(id) {
  //   axios.get(`http://localhost:8000/user/${id}`).then((response) => {
  //     console.log(response.data);

  //     this.setState({
  //       createdGroups: response.data.createdGroupsId,
  //       joinedGroups: response.data.joinedGroupsId,
  //     });
  //   });
  // }
  componentDidMount() {
    // this.getData(this.state.user._id);
    console.log(this.state.user)
  }

  render() {
    return (
      <div>
        <ul>
          <div>Created Groups :</div>
          <br />
          <li></li>
        </ul>
        <br />
        <ul>
          <div>Joined Groups :</div>
          <br />
          <li></li>
        </ul>
      </div>
    );
  }
}
