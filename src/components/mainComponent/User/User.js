import React, { Component } from "react";
import "./User.css";
import UserCreatedGroups from './userComponents/userGroups/userCreatedGroups';
import UserJoinedGroups from './userComponents/userGroups/userJoinedGroups';

import { Link } from "react-router-dom";
import axios from 'axios'



export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() {
    return (
      <div>

      
      <section>
      <div id="lgx-services" class="lgx-blog lgx-banner "> 
          <div class="lgx-inner">
              <div class="container">
              <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="lgx-single-service"> 
                            <span class="icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></span>
                            <UserCreatedGroups  Createdgroups={this.props.Createdgroups} handleGroup={this.props.handleGroup} user={this.props.user} /> 
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="lgx-single-service"> 
                            <span class="icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></span>
                            <UserJoinedGroups JoinedGroups={this.props.JoinedGroups}  handleGroup={this.props.handleGroup} user={this.props.user} /> 
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                          <div class="lgx-single-service lgx-single-service"> 
                          <span class="icon"><i class="fa fa-address-book" aria-hidden="true"></i></span>
                              <h2 class="title"><Link to="/CreateGroup">Create Group</Link></h2>
                              <p>Etiam vel ante ac lacus vestibulum rutrum. Aliquam vehicula, massa in auctor dapibus commodo quis vehicula lacus metus sed justo. </p>
                              
                          </div>
                      </div>
                      <div class="col-sm-6 col-md-3">
                          <div class="lgx-single-service lgx-single-service"> 
                              <span class="icon"><i class="fa fa-address-book" aria-hidden="true"></i></span>
                              <h2 class="title"><Link    to="/JoinGroup">Join Group</Link></h2>
                              <p>Etiam vel ante ac lacus vestibulum rutrum. Aliquam vehicula, massa in auctor dapibus commodo quis vehicula lacus metus sed justo. </p>
                              
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
