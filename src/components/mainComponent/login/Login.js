import React, { Component } from "react";
import axios from "axios";

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

  hundleLogin() {
    if (this.state.email !== "" && this.state.password !== "") {
      axios.post("http://localhost:8000/user/login", this.state)
        .then((user) => {
          if (user.data) {
            this.props.login(user.data);
          }
        })
        .catch((err) => {
          alert(err);
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
      
                                      <button   class="lgx-btn lgx-btn-registration" onClick={this.hundleLogin}>Login</button>
                                  </div>
                              </div>
                          </div>
      
                      </div>
                  </div>
              </div>
          </div>
      </section>
    
      <footer>
          <div id="lgx-footer" class="lgx-footer">
              <div class="lgx-getintouch-area">
                  <div class="lgx-getintouch-inner">
                      <div class="container">
                          <div class="row">
                              <div class="col-xs-12">
                                  <h3 class="lgx-getintouch">
                                      If you Have Any Questions Call Us On <span>(088)920-456-7890</span>
                                      <a class="lgx-btn lgx-btn-contact rippler rippler-default" href="contact.html">Get In Touch</a>
                                  </h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="lgx-footer-middle">
                  <div class="container">
                      <div class="row">
                          <div class="col-xs-12 col-sm-6 col-md-3">
                              <div class="lgx-footer-single">
                                  <a class="logo" href="index.html"><img src="assets/img/logo2.png" alt="Logo" /></a>
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
                          <div class="col-xs-12 col-sm-6 col-md-3">
                              <div class="lgx-footer-single">
                                  <h2 class="title">Instagram Feed</h2>
                                  <div id="instafeed">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="lgx-footer-bottom">
                          <div class="lgx-copyright">
                              <ul class="list-inline">
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Careers</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                              </ul>
                              <p>© 2017 EducationPlus is powered by <a href="http://www.themearth.com/">themearth.</a> Brands are the property of their respective owners.</p>
                          </div>
                          <ul class=" list-inline lgx-social-footer">
                              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                              <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                              <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                          </ul>
                      </div>
      
                  </div>
              </div>
          </div>
      </footer>
  
      
      
      </div>
 
    );
  }
}
