import React, { Component } from "react";
import axios from "axios";
export default class UserGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      groups: [],
    };
  }

  getGroup(id) {
    axios.get(`http://localhost:8000/group/group/${id}`).then((response) => {
   
      var copy = [...this.state.groups];
      copy.push(response.data);
      this.setState({
        groups: copy,
      });
    
    });
  }

  componentDidMount() {
    this.state.user.createdGroupsId.map((el) => {
      this.getGroup(el);
    });
  }

  render() {
    const us = this.state.user.createdGroupsId.map((val) => (
      <li>
        {this.state.groups.val}
        {/* {console.log(this.state.groups.name)} */}
      </li>
    ));
    const gr = this.state.groups.map((group) => <li>{group.name}</li>);
    return (
      <div>
        <ul>
          <div>Created Groups :</div>
          <br />

          <li>{gr}</li>
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
