import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    };
  }
  render() {
    return (
      <div className="app">
        <div className="search-bar">
          <SearchBar data={this.state.dummyData} />
        </div>
        <div className="post-container">
          <PostContainer data={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
