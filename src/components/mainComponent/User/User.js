import React, { Component } from "react";
import "./User.css";
import CreateGroups from "./userComponents/createGroup/createGroups";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "",
      user: this.props.user,
    };
    this.renderView = this.renderView.bind(this);
  }

  renderView() {
    const view = this.state.view;
    if (view === "createGroup") {
      return <CreateGroups  />;
    }
  }

  render() {
    console.log(this.state.user);
    return (
      <section class="text-center about">
        <h1>oTeach</h1>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span
                class="fa fa-group"
                onClick={() => this.props.test("createGroup")}
              ></span>
              <h2>Create a group</h2>
              <p class="lead">
                This website Allows you to create your own group and upload and
                chose which lectures your members see.
              </p>
            </div>
            <div
              class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="fa fa-info"></span>
              <h2>Join a group </h2>
              <p class="lead">
                And it allows you to join other group and learn whatever you
                want.
              </p>
            </div>
            <div class="clearfix visible-md-block visible-sm-block"></div>
            <div
              class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="fa fa-file"></span>
              <h2>About Us</h2>
              <p class="lead">
                We encourage people to learn and advance further and further
                more.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
