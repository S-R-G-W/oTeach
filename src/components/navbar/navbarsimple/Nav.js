import React from "react";
import { Link } from "react-router-dom";
var Nav = (props) => {
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
                                                      <li><Link class="lgx-scroll" to="/login" >Login</Link></li>
                                                      <li><Link class="lgx-scroll" to="/signup" >Register </Link></li>
                                                      <li><Link class="lgx-scroll" to="/">Home </Link></li>
                                                      
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
export default Nav