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
      // loggedIn: false,
      inputText: ""
    };
  }

  // toggleComponents = () => this.setState({ loggedIn: !this.state.loggedIn });

  handleChanges = event => this.setState({ inputText: event.target.value });

  signIn = event => {
    event.preventDefault();
    localStorage.setItem("user", this.state.inputText);
    window.location.reload();
  };

  render() {
    return (
      <div className="app">
        <ComponentFromWithAuthenticate
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
          signIn={this.signIn}
        />
        {/* <button onClick={this.signIn}>Toggle me</button> */}
      </div>
    );
  }
}

export default App;
