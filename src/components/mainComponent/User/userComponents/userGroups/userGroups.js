import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
export default class UserGroups extends Component {
  constructor(props) {
    super(props);  
  }

 

  render() {
    return (
      <div className="entry-body">

        <h5 class="title">Created Groups :</h5>
        
          {this.props.Createdgroups.map((group, key) =>
            <p   onClick={()=>this.props.handleGroup(group)} key={key}><Link  to="/group"> {group.name}</Link> </p>)}
        
        <br />


        <h5 class="title">Joined Groups :</h5>
        <ul>
          {this.props.JoinedGroups.map((group, key) =>
            <li key={key}>{group.name}</li>)}
        </ul>

      </div>
    );
  }
}
