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
      <div className="page-section">

        <div className="container wide">

          {/* <h2 className="section-title align-center">Be with US</h2> */}


          <div className="entry-box flex-row item-col-3">


            <div className="entry-col">

              <div className="entry">



                <div className="entry-body">

                  <h5 className="entry-title">Join Group</h5>
                  <div className="entry-meta">



                  </div>
                  <p>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget.</p>



                </div>

              </div>

            </div>


            <div className="entry-col">

              <div className="entry">


                <div className="entry-body">

                  <h5 className="entry-title"><Link to="/CreateGroup">Create Group</Link></h5>
                  <div className="entry-meta">



                  </div>
                  <p>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget.</p>



                </div>

              </div>

            </div>

            <div className="entry-col">

              <div className="entry">

                <UserGroups JoinedGroups={this.props.JoinedGroups}  Createdgroups={this.props.Createdgroups}  handleGroup={this.props.handleGroup} user={this.props.user} />

              </div>

            </div>

          </div>



        </div>

      </div>
    )
  }
}



