import React from "react";
var NavProfil = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a>OTech</a>
        </li>
        <li>
          <button onClick={props.changepattoprofil}>Profil </button>
        </li>
      </ul>
    </div>
  );
};
export default NavProfil;