import React from "react";
import { Link } from "react-router-dom";
var Nav2 = (props) => {
  return (
    <div className="lgx-container ">
      <header>
        <div id="lgx-header" className="lgx-header">
          <div className="header-top">
            <div className="header-top-inner">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact">
                      <ul className="list-inline">
                        <li>
                          <span className="question-text">Questions?</span>{" "}
                          <i className="fa fa-phone" aria-hidden="true"></i> +123
                          125 145{" "}
                        </li>
                        <li>
                          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                          username@domain.com
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-menu">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook-f" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lgx-header-bottom lgx-header-bottom-fixed-black lgx-header-bottom-fixed-transparent lgx-header-bottom-scrol-black">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <nav className="navbar navbar-default lgx-navbar">
                    <div className="container">
                      <nav className="navbar navbar-default lgx-navbar lgx-navbar-search">
                        <div className="lgxcontainer">
                          <div className="navbar-header">
                            <button
                              type="button"
                              className="navbar-toggle"
                              data-toggle="collapse"
                              data-target=".navbar-collapse"
                            >
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                            </button>
                            <a
                              href="#toggle-search"
                              className="hidden-lg hidden-md hidden-sm lgx-search-mobile search-animate"
                            >
                              <span className="glyphicon glyphicon-search"></span>
                            </a>
                          </div>
                          <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav lgx-nav">
                              <li>
                                <a className="lgx-scroll">
                                  <Link to="/" className="btn btn-big btn-style-5"> Groups  </Link>                               
                                </a>
                              </li>
                              <li>
                                <a className="lgx-scroll">
                                  <Link
                                    to="/Profile"
                                    className="btn btn-big btn-style-5"
                                  >
                                    {" "}
                                    Profil
                                  </Link>
                                </a>
                              </li>
                              <li>
                                <a className="lgx-scroll">
                                  <Link
                                    to="/login"
                                    className="btn btn-big btn-style-5"
                                    onClick={() => props.logout()}
                                  >
                                    
                                    Log OUT
                                  </Link>
                                </a>
                              </li>
                              <li className="hidden-xs">
                                <a href="#toggle-search" className="search-animate">
                                  <span className="glyphicon glyphicon-search"></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="lgx-menu-search search-animate">
                          <div className="container">
                            <form action="#" method="GET" role="search">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="q"
                                  placeholder="Search for snippets and hit enter"
                                />
                                <span className="input-group-btn">
                                  <button className="btn btn-danger" type="reset">
                                    <span className="glyphicon glyphicon-remove"></span>
                                  </button>
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Nav2;
