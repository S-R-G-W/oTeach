import React from 'react'
import './Profil.css'
import { Link } from "react-router-dom";

var Profil = (props) => {
  return (
    <div className="App">
      
      <Link to="/UpdateProfile"><button >
        Update Profile
      </button></Link>

      <div>Welcome {props.user.username}</div>
      <div >{props.user.username}</div>
      <div >{props.user.email}</div>
      <div >Joined Groups List</div>
    </div>
  );
};
export default Profil;
