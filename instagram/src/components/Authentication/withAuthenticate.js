import React from "react";

//this is our HOC called authenticate. Higher order components take in one more more components as arguments and return a new component.
//The c

const withAuthenticate = App =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default withAuthenticate;
