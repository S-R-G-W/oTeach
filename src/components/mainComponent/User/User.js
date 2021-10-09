import React, { Component } from 'react'
import "./User.css";
import UserGroups from './userComponents/groupComponents/userGroups/userGroups';
import {Link } from "react-router-dom";






export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:this.props.user
    }
    
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
                    
                <h5 className="entry-title"><a href="#">Join Group</a></h5>
                <div className="entry-meta">
                  
                  
                    
                </div>
                <p>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget.</p>
  
               
                    
              </div>
                    
            </div>
  
          </div>
          
  
          <div className="entry-col">
  
            <div className="entry">
                  
              
              <div className="entry-body">
                    
                <h5 className="entry-title"><Link to="/CreateGroup"><a>Create Group</a></Link></h5>
                <div className="entry-meta">
                  
                  
                    
                </div>
                <p>Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget.</p>
  
               
                    
              </div>
                    
            </div>
  
          </div>
  
          <div className="entry-col">
  
            <div className="entry">
                  
          
              
              <div className="entry-body">
                  <UserGroups user={this.state.user}/>  
                
               
        
              </div>
                    
            </div>
  
          </div>
  
        </div>
  
        
       
      </div>
  
    </div>
    )}
}



