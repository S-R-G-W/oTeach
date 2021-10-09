import e from "cors";
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
      .post("http://localhost:8000/lecture", {
        name: this.state.name,
        description: this.state.description,
        videoUrl: this.state.videoUrl,
        groupId: this.state.groupId,
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder=""
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder=""
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="videoUrl"
          placeholder=""
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.createLecture;
          }}
        >
          Create Lecture
        </button>
      </div>
    );
  }
}
