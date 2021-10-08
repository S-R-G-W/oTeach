import React from 'react'
import './Profil.css'

var Profil = (props) => {
  return (
    <div className="App">
      
      <button onClick={()=>props.changeView('updateProfile')}>
        Update Profile
      </button>

      <div>Welcome {props.user.username}</div>
      <div >{props.user.username}</div>
      <div >{props.user.email}</div>
      <div >Joined Groups List</div>
    </div>
  );
};
export default Profil;
