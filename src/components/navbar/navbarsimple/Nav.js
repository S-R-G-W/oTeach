import React from "react";
var Nav = (props) => {
  return (
    <div>
  <nav id="mobile-advanced" class="mobile-advanced"></nav>


<header id="header" class="header sticky-header fixed-header">
  
 

  <div class="searchform-wrap">
    <div class="vc-child h-inherit">

      <form class="search-form">
        <button type="submit" class="search-button"></button>
        <div class="wrapper">
          <input type="text" name="search" placeholder="Start typing..." />
        </div>
      </form>

      <button class="close-search-form"></button>

    </div>
  </div>

 

  <div class="top-header">

   

    <div class="logo-wrap">

      <a href="index.html" class="logo"><img src="http://velikorodnov.com/html/churhius/images/logo.png" alt="" /></a>

    </div>

    

  
   
    
    <div class="header-btns">
      
    <div class="head-btn">
        <a  class="btn btn-big btn-style-5" onClick={()=>props.changeView('login')}>Login</a>
      </div>
   
      <div class="head-btn">
        <a  class="btn btn-big btn-style-5" onClick={()=>props.changeView('signup')}>Register </a>
      </div>
    
    </div>


  </div>

</header>


    </div>
  );
};
export default Nav