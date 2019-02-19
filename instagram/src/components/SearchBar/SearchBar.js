import React from "react";
import CameraLogo from "../../assets/camera-logo.svg";
import IGLogo from "../../assets/iglogo.png";
import Heart from "../../assets/heart.svg";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.css";

const SearchBar = props => {
  console.log("These are props", props);
  return (
    <div className="searchBar-container">
      <Container>
        <Navbar fixed="top" className="justify-content-">
          <div className="right-logos">
            <Navbar.Brand>
              <img
                src={CameraLogo}
                alt="Instagram Camera logo"
                className="cameraLogo"
              />
            </Navbar.Brand>
            <Navbar.Brand>
              <img
                src={IGLogo}
                alt="Instagram logo"
                className="instagramLogo"
              />
            </Navbar.Brand>
          </div>
          <Form inline>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="searchForm input-group"
                name=""
                type="text"
                placeholder="Search"
              />
            </InputGroup>
          </Form>

          <Navbar.Brand>
            <img src={Heart} alt="Heart" className="heart" />
          </Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
};

export default SearchBar;

//The purpose of my searchbar component is to display the instagram camera & iglogo, display a search bar (input), and display
/* <i class="far fa-user"></i> */
