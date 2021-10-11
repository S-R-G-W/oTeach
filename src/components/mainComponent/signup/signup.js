import React, { Component } from "react";
import axios from "axios";

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.signupToDataBase = this.signupToDataBase.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signupToDataBase() {
    axios
      .post("http://localhost:8000/user/signup", this.state)
      .then((data) => {
        if (data.data) {
          this.props.signup(data.data);
        }
      })
      .catch((err) => {
        alert("username or email already exist");
      });
  }

  render() {
    return (
         <div> 

  <section>
      <div id="lgx-teachers" class="lgx-teachers">
          <div class="lgx-inner">
              <div class="container">
                  <div class="row">
  
                      <div class="col-xs-12 col-md-8 col-md-offset-2">
                          <div class="lgx-registration-area">
                              <div class="lgx-registration">
                              <div class="lgx-heading lgx-heading-white">
                                      <h2 class="question-text">Create your account</h2>
                                  </div>
                                  <div class="form-group">
                                      <input type="text" name="username" class="form-control lgxname" id="lgxname"  placeholder="Username..."  onChange={this.handleChange} />
                                  </div>
  
                                  <div class="form-group">
                                      <input type="email" class="form-control" id="lgxemail"    placeholder="Email..."
                                      name="email"
                                      onChange={this.handleChange} />
                                  </div>
  
                                  <div class="form-group">
                                      <input class="form-control" id="lgxmobile" type="password" placeholder="Password..." name="password" onChange={this.handleChange}  />
                                  </div>
  
                                  <button   class="lgx-btn lgx-btn-registration" onClick={this.signupToDataBase}>Submit</button>
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






