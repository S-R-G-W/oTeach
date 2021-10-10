import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
export default class UserJoinedGroups extends Component {
  constructor(props) {
    super(props);  
  }

 

  render() {
    return (
      <div className="entry-body">

      
        <h5 class="title">Joined Groups </h5>
        
          {this.props.JoinedGroups.map((group, key) =>
            <p key={key}>{group.name}</p>)}
        

      </div>
    );
  }
}