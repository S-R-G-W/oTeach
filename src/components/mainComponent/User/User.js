import React, { Component } from 'react'
import "./User.css";
import CreateGroups from './userComponents/createGroup/createGroups';
import UserGroups from './userComponents/groupComponents/userGroups/userGroups';
import Profil from './userComponents/Profile/Profil'
import UpdateProfile from './userComponents/Profile/update/UpdateProfile';





export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'user',
      user:this.props.user
    }
    this.changeView = this.changeView.bind(this)
  }


  changeView(option) {
    this.setState({
      view: option,
    });
  }
  renderView() {
    const view = this.state.view;
    if(view === 'createGroup'){
      return <CreateGroups user={this.props.user}/>
    }
    else if(view === 'profile'){
      return <Profil user={this.state.user} changeView={this.changeView} />
    }
    else if(view === 'updateProfile'){
      return <UpdateProfile changeView={this.props.changeView} user={this.state.user}/>
    }
    else{
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
                    
                <h5 className="entry-title"><a onClick={()=>this.changeView('createGroup')}>Create Group</a></h5>
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
    )

  }
}

  render() {
    return(
      <div>
        {this.renderView()}
      </div>
    )
  }
}



