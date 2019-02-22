import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import IGLogo from "../../assets/iglogo.png";
import IGMobile from "../../assets/instagram-mobile.png";

//import styled components and create a styled button, use it to style the entire page
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 355px;
  border: 1px solid lightgrey;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  background-color: white;

  ${props =>
    props.primary &&
    css`
      display: flex;
      flex-direction: column;
      width: 350px;
      height: 354px;
    `}
`;

const Button = styled.button`
  background: #308cee;
  border-radius: 3px;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: bold;
  width: 266px;
  margin-top: 15px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;

  ${props =>
    props.primary &&
    css`
      width: 370px;
      height: auto;
    `}
`;

const Input = styled.input`
  width: 266px;
`;

const Login = props => {
  return (
    <>
      <Wrapper>
        <Image src={IGMobile} alt="Instagram mobile logo" primary />
        <Wrapper primary>
          <Image src={IGLogo} alt="Instagram Logo" />
          <Input
            type="text"
            value={props.inputText}
            onChange={props.handleChanges}
            placeholder=" Username"
          />
          <Button onClick={props.signIn}>Log In</Button>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Login;
