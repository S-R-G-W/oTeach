import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.hundleLogin = this.hundleLogin.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hundleLogin(e) {
    if (this.state.email !== "" && this.state.password !== "") {
      e.target.disabled = true
      axios.post("http://localhost:8000/user/login", this.state)
        .then((user) => {
          if (user.data) {
            this.props.login(user.data);
          }
        })
        .catch((err) => {
          swal(err);
        });
    }
  }

  render() {
    return (
      <div class="lgx-container ">
       

      
      
      
  
      <section>
          <div id="lgx-teachers" class="lgx-teachers">
              <div class="lgx-inner">
                  <div class="container">
                      <div class="row">
      
                          <div class="col-xs-12 col-md-8 col-md-offset-2">
                              <div class="lgx-registration-area">
                                  <div class="lgx-registration">
                                  <div class="lgx-heading lgx-heading-white">
                                      <h2 class="lgx-scroll">Login</h2>
                                  </div>
                                  
      
                                      <div class="form-group">
                                          <input type="email" name="email" class="form-control"  placeholder="Enter email"  onChange={this.handleChange}/>
                                      </div>
      
                                      <div class="form-group">
                                          <input type="password" name="password" class="form-control"  placeholder="password"  onChange={this.handleChange}/>
                                      </div>
      
                                      <button id="login"  class="lgx-btn lgx-btn-registration" onClick={this.hundleLogin}>Login</button>
                                  </div>
                              </div>
                          </div>
      
                      </div>
                  </div>
              </div>
          </div>
      </section>
    
    
      
      
      </div>
 
    );
  }
}
