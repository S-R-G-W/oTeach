import { SwipeableDrawer } from "@mui/material";
import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert";

export default class JoinGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      groups: [],
      createdAlready: [],
      groupsToJoin: [],
      requestsId: [],
    };
  }

  getAllGroups() {
    var arr = this.state.user.createdGroupsId.concat(
      this.state.user.joinedGroupsId
    );
    //  console.log(arr);
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

  joinRequestSent() {
    var arr = [];
    this.state.groups.map((el) => {
      if (!this.state.user._id.includes(el.requestsId)) {
        arr.push(el);
      }
    });
    this.setState({
      requestsId: arr,
    });
  }

  joinRequest(group) {
    var copy = [...group.requestsId];
    copy.push(this.state.user._id);
    var id = group._id;
    axios.put(`http://localhost:8000/group/group/${id}`, {
      arr: copy,
    });

    swal("Join Request Has Been Sent !");
  }

  // getRequestId(id) {
  //   axios.get(`http://localhost:8000/group/group/${id}`).then((response) => {
  //     var copy = [...this.state.requestsId];
  //     copy.push(response.data);
  //     this.setState({
  //       requestsId: copy,
  //     });
  //   });
  //   console.log(this.state.requestsId);
  // }

  componentDidMount() {
    this.getAllGroups();
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
                <button
                 change={() => this.joinRequestId()}
                  onClick={() => this.joinRequest(group)}
                >
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
