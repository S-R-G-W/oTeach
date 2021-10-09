import React from 'react'
import './Profil.css'
import { Link } from "react-router-dom";

var Profil = (props) => {
  return (
    <div className="App">
      
      <Link to="/UpdateProfile"><button >
        Update Profile
      </button></Link>

      <div><h1>Welcome {props.user.username}</h1></div>
      <div > name : {props.user.username}</div>
      <div > email :{props.user.email}</div>
    </div>
  );
};
export default Profil;
