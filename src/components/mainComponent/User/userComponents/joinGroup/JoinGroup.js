import axios from "axios";
import React, { Component } from "react";

export default class JoinGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      groups: [],
      createdAlready: [],
      groupsToJoin: [],
    };
  }

  getAllGroups() {
    var arr = this.state.user.createdGroupsId.concat(
      this.state.user.joinedGroupsId
    );
    console.log(arr);
    axios
      .get("http://localhost:8000/group/group")
      .then((response) => {
        this.setState({ groups: response.data, createdAlready: arr });
      })
      .then(() => this.groupsToJoin());
  }

  groupsToJoin() {
    var arr = [];
    this.state.groups.map((el) => {
      if (!this.state.createdAlready.includes(el._id)) {
        arr.push(el);
      }
    });

    this.setState({
      groupsToJoin: arr,
    });
  }

  componentDidMount() {
    this.getAllGroups();
  }

  joinRequest(obj) {
    console.log(obj);
  }

  render() {
    return (
      <div>
        <h3>Join A Group :</h3>
        <ul>
          <li>
            {this.state.groupsToJoin.map((group, i) => (
              <li key={i}>
                {group.name}
                {"       "}
                <button onClick={() => this.joinRequest(group)}>
                  Join Request
                </button>
              </li>
            ))}
          </li>
        </ul>
      </div>
    );
  }
}
