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

  joinRequest(group) {
    var copy = [...group.requestsId];
    copy.push(this.state.user._id);
    var id = group._id;
    axios.put(`http://localhost:8000/group/group/${id}`, {
      arr: copy,
    });
    swal("Join Request Has Been Sent !");
    var array = [];
    this.state.groups.map((el) => {
      if (!this.state.user._id.includes(el.requestsId)) {
        array.push(el);
      }
    });

    this.setState({
      groupsToJoin: array,
    });
  }

  componentDidMount() {
    this.getAllGroups();
  }

  render() {
    return (
      <div>
     <section>
  <div class="lgx-blog lgx-banner ">
    <div class="lgx-inner">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <div class="lgx-registration-area">
              <div class="lgx-registration">
              <div  class="lgx-single-service lgx-single-service"> 

              <h2 class='title'>Join A Group </h2>
              </div>
                <div class="form-group">
                 
                 
                </div>
                <div  class="lgx-single-service lgx-single-service">
                {this.state.groupsToJoin.map((group, i) => (
              <div  key={i}>
                {group.name}
                {"       "}
              
                <button
                class="lgx-btn lgx-btn-registration"
                
                  onClick={() => this.joinRequest(group)}
                >
                  Join
                </button>
              </div>
            ))}
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
 
</div>
 
 )}
     
                }