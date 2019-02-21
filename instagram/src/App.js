import React, { Component } from "react";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import PostsPage from "./components/PostContainer/PostsPage";

import "./App.css";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
