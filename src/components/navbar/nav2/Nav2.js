import React from "react";
import { Link } from "react-router-dom";
var Nav2 = (props) => {
  return (
    <div>

      <header id="header" className="header sticky-header fixed-header">


        <div className="top-header">


          <div className="logo-wrap">

            <a href="index.html" className="logo"><img src="http://velikorodnov.com/html/churhius/images/logo.png" alt="" /></a>

          </div>






          <div className="header-btns">

            <div className="head-btn">
              <Link to="/"><a className="btn btn-big btn-style-5" >Home </a></Link>
            </div>

            <div className="head-btn">
            <Link to="/Profile"> <a className="btn btn-big btn-style-5"  >Profil</a></Link>
            </div>

            <div className="head-btn">
            <a className="btn btn-big btn-style-5" >Log OUT </a>
            </div>


          </div>


        </div>

      </header>


    </div>
  );
};
export default Nav2