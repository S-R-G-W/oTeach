import React from "react";
import "./Profil.css";
import { Link } from "react-router-dom";

var Profil = (props) => {
  return (
    <div class="lgx-blog lgx-banner ">
      <section>
        <div id="lgx-news" class="lgx-news lgx-teacher-single">
          <div class="lgx-inner">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <article>
                    <header>
                      <div class="lgx-single-service">
                        <h1 class="title">{props.user.username}</h1>
                        <h3 class="subtitle"> email :{props.user.email}</h3>
                        <div class="lgx-share">
                          <ul class="list-inline lgx-social">
                            <Link to="/UpdateProfile">
                              <button>Update Profile</button>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </header>
                    <section></section>
                    <footer>
                      <div class="row">
                        <div class="col-xs-12">
                          <h4 class="title">Share</h4>
                          <div class="lgx-share">
                            <ul class="list-inline lgx-social">
                              <li>
                                <a href="#">
                                  <i
                                    class="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    class="fa fa-facebook-f"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    class="fa fa-linkedin"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    class="fa fa-youtube-play"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    class="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

);
};
export default Profil;
