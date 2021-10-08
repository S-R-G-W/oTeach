import React, { Component } from 'react'
import "./User.css";
import CreateGroups from './userComponents/createGroup/createGroups';
import Profil from './userComponents/Profile/Profil'
import UpdateProfile from './userComponents/Profile/update/UpdateProfile';




export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'profile',
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
      <div>
        <section className="text-center about">
          <h1>oTeach</h1>
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span
                  className="fa fa-group"
                  onClick={() => this.changeView("createGroup")}
                ></span>
                <h2>Create a group</h2>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled
                </p>
              </div>
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-info"></span>
                <h2>Join a group </h2>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum{" "}
                </p>
              </div>
              <div className="clearfix visible-md-block visible-sm-block"></div>
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-file"></span>
                <h2>Educate Yourself</h2>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled
                </p>
              </div>
            </div>
          </div>
        </section>
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


