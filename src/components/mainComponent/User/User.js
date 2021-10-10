import React, { Component } from 'react'
import "./User.css";
import UserGroups from './userComponents/userGroups/userGroups';
import { Link } from "react-router-dom";
import axios from 'axios'



export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    };
  }



  render() {
    return (
      <section>
      <div id="lgx-services" class="lgx-services lgx-services-black"> 
          <div class="lgx-inner">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-6 col-md-4">
                          <div class="lgx-single-service lgx-single-service-white"> 
                              <span class="icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></span>
                              <h2 class="title"><Link to="/CreateGroup">Create Group</Link></h2>
                              <p>Etiam vel ante ac lacus vestibulum rutrum. Aliquam vehicula, massa in auctor dapibus commodo quis vehicula lacus metus sed justo. </p>
                              <a class="lgx-btn-simple" href="#">Read More</a>
                          </div>
                      </div>
                      <div class="col-sm-6 col-md-4">
                          <div class="lgx-single-service lgx-single-service-white"> 
                              <span class="icon"><i class="fa fa-address-book" aria-hidden="true"></i></span>
                              <h2 class="title"><a href="#">Join Group</a></h2>
                              <p>Etiam vel ante ac lacus vestibulum rutrum. Aliquam vehicula, massa in auctor dapibus commodo quis vehicula lacus metus sed justo. </p>
                              <a class="lgx-btn-simple" href="#">Read More</a>
                          </div>
                      </div>
                      <div class="col-sm-6 col-md-4">
                          <div class="lgx-single-service lgx-single-service-white"> 
                              <span class="icon"><i class="fa fa-address-book" aria-hidden="true"></i></span>
                              <UserGroups JoinedGroups={this.props.JoinedGroups}  Createdgroups={this.props.Createdgroups}  handleGroup={this.props.handleGroup} user={this.props.user} /> 
                          </div>
                      </div>
                     
                  </div>
              </div>
          </div>
      </div>
  </section>
  )}
}



