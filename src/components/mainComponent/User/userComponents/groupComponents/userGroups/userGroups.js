import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class UserGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      Createdgroups: [],
      JoinedGroups: [],
    };
  }



  getCreatedGroup(id) {
    axios.get(`http://localhost:8000/group/group/${id}`).then((response) => {
      var copy = [...this.state.Createdgroups];
      copy.push(response.data);
      this.setState({
        Createdgroups: copy,
      });
     
    });
  }

  getJoinedGroup(id) {
    axios.get(`http://localhost:8000/group/group/${id}`).then((response) => {
      var copy1 = [...this.state.JoinedGroups];
      copy1.push(response.data);
      this.setState({
        JoinedGroups: copy1,
      });
    });
  }


  componentDidMount() {
    this.state.user.createdGroupsId.map((el) => {
      this.getCreatedGroup(el);
    });

    this.state.user.joinedGroupsId.map((el) => {
      this.getJoinedGroup(el);
    });
  }

  render() {
    return (
      <div className="entry-body">
        <h5 className="entry-title">Created Groups :</h5>
        <ul>
          {this.state.Createdgroups.map((group, key) => (
            <li onClick={() => this.props.handleGroup(group)} key={key}>
              <Link to="/group"> {group.name}</Link>{" "}
            </li>
          ))}
        </ul>
        <br />

        <h5 className="entry-title">Joined Groups :</h5>
        <ul>
          {this.state.JoinedGroups.map((group, key) => (
            <li key={key}>{group.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
