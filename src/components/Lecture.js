import React from "react";
import Nav from "./Nav.js";
var Lecture = (props) => {
    

  return (
    <div>
        <Nav changepattoprofil={()=>props.changepattoprofil('profil')}/>
      <h4 class="text-warning text-center pt-5">Create Lecture</h4>
    </div>
  );
};
export default Lecture;
