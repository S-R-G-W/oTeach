import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class CreateGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      adminId: this.props.user._id,
      // userMembers: this.props.adminId.createdGroupsId,
    };
    this.createGroup = this.createGroup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.setAdminId = this.setAdminId.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  createGroup() {
    if (this.state.name !== "") {
      axios.post("http://localhost:8000/group/group", this.state)
      
        .then((data) => this.props.fetch())
        .catch((err) => alert("error creating the group"));
    } else {
      alert("empty field");
    }
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
              <div  class="lgx-single-service lgx-single-service"> 
                  <h2 class="title">Create your Group</h2>
                </div>
             
                 

                <div class="form-group">
                 
                   <input
                     class="form-control"
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Group name here !"
          onChange={this.handleChange}
        />
                </div>

                        <button
                          class="lgx-btn lgx-btn-registration"
                          onClick={() => {
                            this.createGroup();
                          }}
                        >
                          Create
                        </button>

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

