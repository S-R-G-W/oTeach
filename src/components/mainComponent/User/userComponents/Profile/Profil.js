import React from "react";
import "./Profil.css";
import { Link } from "react-router-dom";

var Profil = (props) => {
  return (
    <div class="lgx-blog lgx-banner ">
  <section>
<div id="lgx-services" class="lgx-blog lgx-banner "> 
    <div class="lgx-inner">
        <div class="container">
        <div class="row">
              <div class="col-sm-12">
                  <div  class="lgx-single-service lgx-single-service"> 
                      <span class="icon"><i  aria-hidden="true"></i></span>
                     <h2 class="title" >{props.user.username}</h2>
                     <p>{props.user.email}</p> 
                      
<Link to="/UpdateProfile">
                            <button   class="lgx-btn lgx-btn-registration">Update Profile</button>
                            </Link>

                  </div>
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
