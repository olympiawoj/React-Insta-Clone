import React from "react";

//this is our HOC called authenticate. Higher order components take in one more more components as arguments and return a new component.
//The c

const withAuthenticate = PostsPage => Login => props => {
  if (props.showFirst) {
    return <PostsPage />;
  }
  return <Login />;
};

export default withAuthenticate;
