import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataArray: dummyData
    };
  }

  //add comment method adds comment to the comments array, which is a property on our PostObj.

  addComment = (e, item) => {
    e.preventDefault();
    console.log(item);
    //let instead of const
    let newCommentItem = {
      username: "test-user",
      text: item
    };

    this.setState({ dataArray: [...this.state.dataArray, newCommentItem] });
  };

  render() {
    return (
      <div className="app">
        <div className="search-bar">
          <SearchBar dataArray={this.state.dataArray} />
        </div>
        <div className="post-container">
          <PostContainer
            dataArray={this.state.dataArray}
            addComment={this.addComment}
          />
        </div>
      </div>
    );
  }
}

export default App;
