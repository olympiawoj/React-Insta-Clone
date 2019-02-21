import React from "react";
import ReactDOM from "react-dom";
import withConditional from "./components/withConditionalRender";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

import "./styles.css";

const ToShow = withConditional(FirstComponent)(SecondComponent);

class App extends React.Component {
  state = {
    inputText: ""
  };

  handleChanges = event => this.setState({ inputText: event.target.value });

  signIn = event => {
    event.preventDefault();
    localStorage.setItem("user", this.state.inputText);
  };

  signIn;
  render() {
    return (
      <div className="App">
        {/* Render the component that is created with our HOC right here */}
        <ToShow />
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
