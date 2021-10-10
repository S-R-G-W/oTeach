import React, { Component } from "react";
import axios from "axios";

export default class Lecture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      videoUrl: "",
      groupId: this.props.group._id,
    };
    this.createLecture = this.createLecture.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createLecture() {
    axios
      .post("http://localhost:8000/lecture", this.state)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                          <h2 class="question-text">Create your Lecture</h2>
                        </div>

                        <div class="form-group">
                          <input
                            class="form-control"
                            value={this.state.name}
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={this.handleChange}
                          />
                          <br></br>
                          <input
                            class="form-control"
                            type="text"
                            value={this.state.description}
                            name="description"
                            placeholder="description"
                            onChange={this.handleChange}
                          />
                          <br></br>

                          <input
                            class="form-control"
                            value={this.state.videoUrl}
                            type="text"
                            name="videoUrl"
                            placeholder="videoUrl"
                            onChange={this.handleChange}
                          />
                        </div>

                        <button
                          class="lgx-btn lgx-btn-registration"
                          onClick={this.createLecture}
                        >
                          Create Lecture
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
