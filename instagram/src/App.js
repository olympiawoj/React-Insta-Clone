import React, { Component } from "react";
import "./App.css";
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
        <p>Testing</p>
        {/* <PostContainer /> */}
      </div>
    );
  }
}

export default App;
