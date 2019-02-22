import React from "react";
import CameraLogo from "../../assets/camera-logo.svg";
import IGLogo from "../../assets/iglogo.png";

import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div id="searchBar-container">
      <div className="right-logos">
        <img
          src={CameraLogo}
          alt="Instagram Camera logo"
          className="cameraLogo"
        />

        <img src={IGLogo} alt="Instagram logo" className="instagramLogo" />
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>

        <input
          id
          className="searchForm input-group"
          name=""
          type="text"
          placeholder="   Search"
          onKeyDown={props.searchPosts}
        />
      </div>

      <div className="left-logos">
        <i className="far fa-circle" />
        <i className="far fa-heart" />
        {/* <img src={Heart} alt="Heart" className="heart" /> */}
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;

//The purpose of my searchbar component is to display the instagram camera & iglogo, display a search bar (input), and display
/* <i class="far fa-user"></i> */
