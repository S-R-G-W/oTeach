import React from "react";

function SignUp(props) {
  return (
    <div>
      <label>Your name here :</label>
      <input
        type="text"
        placeholder="Username..."
        name="name"
        onChange={props.handleChange}
      />
      <br />
      <label>Your Email here :</label>
      <input
        type="text"
        placeholder="Email..."
        name="email"
        onChange={props.handleChange}
      />
      <br />
      <label>Your Password here:</label>
      <input type="password" name="password" onChange={props.handleChange} />
      <br />
      <button onClick={props.signupToDataBase}>Submit</button>
    </div>
  );
}

export default SignUp;
