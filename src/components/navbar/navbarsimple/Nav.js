import React from "react";
var Nav = (props) => {
  return (
    <div>
  <nav id="mobile-advanced" className="mobile-advanced"></nav>


<header id="header" className="header sticky-header fixed-header">
  
 

  <div className="searchform-wrap">
    <div className="vc-child h-inherit">

      <form className="search-form">
        <button type="submit" className="search-button"></button>
        <div className="wrapper">
          <input type="text" name="search" placeholder="Start typing..." />
        </div>
      </form>

      <button className="close-search-form"></button>

    </div>
  </div>

 

  <div className="top-header">

   

    <div className="logo-wrap">

      <a href="index.html" className="logo"><img src="http://velikorodnov.com/html/churhius/images/logo.png" alt="" /></a>

    </div>

    

  
   
    
    <div className="header-btns">
      
    <div className="head-btn">
        <a  className="btn btn-big btn-style-5" onClick={()=>props.changeView('login')}>Login</a>
      </div>
   
      <div className="head-btn">
        <a  className="btn btn-big btn-style-5" onClick={()=>props.changeView('signup')}>Register </a>
      </div>
      <div className="head-btn">
        <a  className="btn btn-big btn-style-5" onClick={()=>props.changeView('home')}>Home </a>
      </div>
    
    </div>


  </div>

</header>


    </div>
  );
};
export default Nav