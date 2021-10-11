
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,

    };
    this.handleChange = this.handleChange.bind(this);
    this.hundleUpdate = this.hundleUpdate.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hundleUpdate() {
    axios.put(`http://localhost:8000/user/update/${this.props.user._id}`, this.state)
      .then((data) => {
        if (window.confirm('updated')) {
          this.props.changeView('home')
        }
        else {
          this.props.changeView('home')
        }

      })
      .catch((err) => { alert(err) })
  }

  render() {
    return (
      <div class="lgx-blog lgx-banner ">
        <section>
          <div id="lgx-teachers" class="lgx-teachers">
            <div class="lgx-inner">
              <div class="container">
                <div class="row">

                  <div class="col-xs-12 col-md-8 col-md-offset-2">
                    <div class="lgx-registration-area">
                      <div class="lgx-registration">
                        <div class="lgx-single-service lgx-single-service">
                          <h2 class="title" >Update Your Profil</h2>
                        </div>
                        <div class="form-group">
                          <input
                            class="form-control lgxname"
                            value={this.state.username}
                            type="text"
                            placeholder="username..."
                            name="username"
                            onChange={this.handleChange}
                          />

                        </div>

                        <div class="form-group">
                          <input
                            class="form-control"
                            value={this.state.email}
                            type="text"
                            placeholder="Email..."
                            name="email"
                            onChange={this.handleChange}
                          />

                        </div>

                        <Link to="/login"><button class="lgx-btn lgx-btn-registration" onClick={this.hundleUpdate} >update</button></Link>


                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    )
  }
}
