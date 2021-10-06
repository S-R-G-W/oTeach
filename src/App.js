import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import Login from "./components/Login.js";
import Profil from "./components/Profil.js";
import axios from "axios";
import Nav from "./components/Nav.js";
import UpdateProfil from "./components/Update";
import Lecture from "./components/Lecture";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view:'profil'
    };
  }
    changepattoupdate=()=>{
    this.setState({
      view:'update'
    })
  }
    changepattolectur=()=>{
      this.setState({
        view:'lecture'
      })
  }
   changepattoprofil=()=>{
    this.setState({
      view:'profil'
    })

  }
  renderView(){
    const { view } = this.state;
    if(view === 'signup'){
      return <SignUp/>
    }
    else if(view === 'login'){
      return <Login/>
    }
   
    else if(view==="profil"){
      return (
        <div>
          <div>
          <Nav changepattoprofil={this.changepattoprofil.bind(this)} />
          </div>
       <div>
       <Profil changepattolectur={this.changepattolectur.bind(this)} changepattoupdate={this.changepattoupdate.bind(this)} pathtoupdate={this.state.view} />
       </div>
         
        </div>
      )
    
     }
     else if (this.state.view==='update'){
      return(
        <UpdateProfil />
      )
    }
    else if (this.state.view==='lecture'){
      return(
        <Lecture />
      )
    }
    else {
      return <div>home page</div>
    }

  }


  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}
