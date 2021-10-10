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



  <footer>
    <div id="lgx-footer" class="lgx-footer">
      
        <div class="lgx-footer-middle"> 
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="lgx-footer-single">
                           
                            <address>
                                51 Francis Street, Darlinghurst <br></br>
                                NSW 2010, United States
                            </address>
                            <ul class="list-unstyled lgx-address-info">
                                <li><i class="fa fa-phone"></i>+61 1900 654 368</li>
                                <li><i class="fa fa-envelope"></i>office@educationplus.com</li>
                                <li><i class="fa fa-envelope"></i>office2@educationplus.com.au</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="lgx-footer-single">
                            <h2 class="title">The Education</h2>
                            <ul class="list-unstyled">
                                <li><a href="#">Admision Area</a></li>
                                <li><a href="#">Guidance Documents</a></li>
                                <li><a href="#">Help Desk</a></li>
                                <li><a href="#">FAQ Area</a></li>
                                <li><a href="#">Professional Point</a></li>
                                <li><a href="#">Courses in Education</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <div class="lgx-footer-single">
                            <h2 class="title">Cources</h2>
                            <ul class="list-unstyled">
                                <li><a href="#">Interactive Python</a></li>
                                <li><a href="#">Advance Oracle</a></li>
                                <li><a href="#">Basic PHP</a></li>
                                <li><a href="#">Electronics</a></li>
                                <li><a href="#">Java Resources</a></li>
                                <li><a href="#">Courses Education</a></li>
                            </ul>
                        </div>
                    </div>
                   
                </div>
              

            </div>
            
        </div>
     
    </div>
</footer>

</div>
  
  )}
}
