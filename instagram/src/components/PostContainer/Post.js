import React from "react";

import PropTypes from "prop-types";

const Post = props => {
  // console.log("These are props in Post component", props);
  return <img className="post-img" src={props.imageUrl} alt="test" />;
};

export default Post;

Post.propTypes = {
  itemUrl: PropTypes.string
};
