import React from "react";
import {Link } from "react-router-dom";
var Nav = (props) => {
  return (
    <div>
      <header id="header" class="header sticky-header fixed-header">

        <div class="top-header">

          <div class="logo-wrap">

            <a href="index.html" class="logo"><img src="http://velikorodnov.com/html/churhius/images/logo.png" alt="" /></a>

          </div>

          <div class="header-btns">
            <div class="head-btn">
              <Link to="/"><a class="btn btn-big btn-style-5" >Home </a></Link>
            </div>


            <div class="head-btn">
              <Link to="/login"><a class="btn btn-big btn-style-5" >Login</a></Link>
            </div>

            <div class="head-btn">
              <Link to="/signup"><a class="btn btn-big btn-style-5" >Register </a></Link>
            </div>



          </div>


        </div>

      </header>


    </div>
  );
};
export default Nav