import React from "react";
import {Link } from "react-router-dom";
var Nav = (props) => {
  return (
    <div>
      <header id="header" className="header sticky-header fixed-header">

        <div className="top-header">

          <div className="logo-wrap">

            <a href="index.html" className="logo"><img src="http://velikorodnov.com/html/churhius/images/logo.png" alt="" /></a>

          </div>

          <div className="header-btns">
            <div className="head-btn">
              <Link to="/" className="btn btn-big btn-style-5">Home </Link>
            </div>


            <div className="head-btn">
              <Link to="/login" className="btn btn-big btn-style-5">Login</Link>
            </div>

            <div className="head-btn">
              <Link to="/signup" className="btn btn-big btn-style-5">Register </Link>
            </div>



          </div>


        </div>

      </header>


    </div>
  );
};
export default Nav