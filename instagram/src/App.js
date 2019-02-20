import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
      //posts is an array of Post objects
    };
  }
  componentDidMount() {
    this.setState({
      posts: dummyData //:characters
    });
  }

  render() {
    return (
      <div className="app">
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="post-container">
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
