import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar className="searchBar" data={this.state.dummyData} />
        <PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
