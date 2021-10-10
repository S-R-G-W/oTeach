import React from "react";
import { Link } from "react-router-dom";
var Nav = (props) => {
  return (
    <div class="lgx-container ">
     
      <header>
          <div id="lgx-header" class="lgx-header"> 
              <div class="header-top"> 
                  <div class="header-top-inner">
                      <div class="container">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="contact">
                                      <ul class="list-inline">
                                          <li><span class="question-text">Questions?</span> <i class="fa fa-phone" aria-hidden="true"></i> +123 125 145 </li>
                                          <li><i class="fa fa-envelope" aria-hidden="true"></i> username@domain.com</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="right-menu">
                                      <ul class="list-inline">
                                        
                                          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-facebook-f" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> 
              <div class="lgx-header-bottom lgx-header-bottom-fixed-black lgx-header-bottom-fixed-transparent lgx-header-bottom-scrol-black"> 
                  <div class="container">
                      <div class="row">
                          <div class="col-xs-12">
                              <nav class="navbar navbar-default lgx-navbar">
                                  <div class="container">
                                      <nav class="navbar navbar-default lgx-navbar lgx-navbar-search">
                                          <div class="lgxcontainer">
                                              <div class="navbar-header">
                                                  <button type="button" class="navbar-toggle" data-toggle="collapse"
                                                          data-target=".navbar-collapse">
                                                      <span class="sr-only">Toggle navigation</span>
                                                      <span class="icon-bar"></span>
                                                      <span class="icon-bar"></span>
                                                      <span class="icon-bar"></span>
                                                  </button>
                                                  <a href="#toggle-search" class="hidden-lg hidden-md hidden-sm lgx-search-mobile search-animate"><span class="glyphicon glyphicon-search"></span></a>
                                                
                                              </div>
                                              <div class="collapse navbar-collapse">
                                                  <ul class="nav navbar-nav lgx-nav">
                                                      <li><Link class="lgx-scroll" to="/login" >Login</Link></li>
                                                      <li><Link class="lgx-scroll" to="/signup" >Register </Link></li>
                                                      <li><Link class="lgx-scroll" to="/">Home </Link></li>
                                                      <li class="hidden-xs"><a href="#toggle-search" class="search-animate"><span class="glyphicon glyphicon-search"></span></a></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="lgx-menu-search search-animate">
                                              <div class="container">
                                                  <form action="#" method="GET" role="search">
                                                      <div class="input-group">
                                                          <input type="text" class="form-control" name="q" placeholder="Search for snippets and hit enter" />
                                                          <span class="input-group-btn">
                                                              <button class="btn btn-danger" type="reset"><span class="glyphicon glyphicon-remove"></span></button>
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
export default Nav