import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import IGLogo from "../../assets/iglogo.png";

const Login = props => {
  return (
    <>
      <img src={IGLogo} alt="Instagram Logo" />
      <input
        type="text"
        value={props.inputText}
        onChange={props.handleChanges}
      />
      <button onClick={props.signIn}>Sign In</button>
    </>
  );
};

export default Login;
