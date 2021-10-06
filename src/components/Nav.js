import React from "react";
import './Nav.css'
var Nav = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a onClick={props.changepattoprofil}>OTech</a>
        </li>
        <li>
          <span onClick={props.changepattoprofil}>Profil </span>
        </li>
      </ul>
    </div>
  );
};
export default Nav