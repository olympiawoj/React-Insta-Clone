import React, { Component } from "react";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";

import "./App.css";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      showFirst: false
    };
  }

  toggleComponents = () => this.setState({ showFirst: !this.state.showFirst });

  render() {
    return (
      <div className="app">
        <ComponentFromWithAuthenticate showFirst={this.state.showFirst} />
        <button onClick={this.toggleComponents}>Toggle me</button>
      </div>
    );
  }
}

export default App;
