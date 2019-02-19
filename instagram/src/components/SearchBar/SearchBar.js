import React from "react";
import CameraLogo from "../../assets/camera-logo.svg";
import IGLogo from "../../assets/iglogo.png";
import Heart from "../../assets/heart.svg";

// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Container from "react-bootstrap/Container";
// import InputGroup from "react-bootstrap/InputGroup";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchBar.css";

const SearchBar = props => {
  console.log("These are props", props);
  return (
    <div className="searchBar-container">
      <div className="right-logos">
        <img
          src={CameraLogo}
          alt="Instagram Camera logo"
          className="cameraLogo"
        />

        <img src={IGLogo} alt="Instagram logo" className="instagramLogo" />
        <i class="far fa-user" />
      </div>

      <input
        className="searchForm input-group"
        name=""
        type="text"
        placeholder="Search"
      />

      <div className="left-logos">
        <img src={Heart} alt="Heart" className="heart" />
        {/* <FontAwesomeIcon icon="envelope" /> */}
      </div>
    </div>
  );
};

export default SearchBar;

//The purpose of my searchbar component is to display the instagram camera & iglogo, display a search bar (input), and display
/* <i class="far fa-user"></i> */
