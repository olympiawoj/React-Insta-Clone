import React from "react";
import "./PostContainer.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img className="user-img" src={props.thumbnailUrl} alt="test" />
      </div>
      <div className="post-username">{props.username}</div>
    </div>
  );
};
export default PostHeader;
