import React from "react";

const Post = props => {
  console.log("These are props", props);
  return <img className="post-img" src={props.imageUrl} alt="test" />;
};

export default Post;
