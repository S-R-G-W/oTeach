import React from "react";

function SignUp() {
  return (
    <div>
      <label>Your name here :</label>
      <input type="text" placeholder="Username..." />
      <br />
      <label>Your Email here :</label>
      <input type="text" placeholder="Email..." />
      <br />
      <label>Your Password here:</label>
      <input type="password" />
      <br />
      <button>Submit</button>
    </div>
  );
}

export default SignUp;
