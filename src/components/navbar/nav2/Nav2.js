import React from "react";
import { Link } from "react-router-dom";
var Nav2 = (props) => {
  return (
    <div class="lgx-container ">

      <header>
        <div id="lgx-header" class="lgx-header">
          <div class="lgx-header-bottom lgx-header-bottom-fixed-black lgx-header-bottom-fixed-transparent lgx-header-bottom-scrol-black">
            <div class="container">
              <div class="row">
                <div class="col-xs-12">
                  <nav class="navbar navbar-default lgx-navbar">
                    <div class="container">
                      <nav class="navbar navbar-default lgx-navbar lgx-navbar-search">
                        <div class="lgxcontainer">

                          <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav lgx-nav">
                              <li><Link to="/" className="lgx-scroll"> Groups  </Link></li>
                              <li><Link to="/Profile" className="lgx-scroll">Profile</Link></li>
                              <li><Link className="lgx-scroll" to="/login" onClick={() => props.logout()}>Logout</Link></li>
                            </ul>
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
