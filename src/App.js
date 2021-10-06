import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/signup.js";
import Login from "./components/Login.js";
import axios from "axios";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      view:'login'
    };
  }

  renderView(){
    const { view } = this.state;
    if(view === 'signup'){
      return <SignUp/>
    }
    else if(view === 'login'){
      return <Login/>
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
