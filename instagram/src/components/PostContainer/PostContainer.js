import React from "react";
import PostHeader from "./PostHeader";
import Post from "./Post";

const PostContainer = props => {
  console.log("These are props", props);
  return (
    <>
      {props.data.map(item => (
        <div key={item.username} className="post-container">
          <PostHeader
            username={item.username}
            thumbnailUrl={item.thumbnailUrl}
          />
          <Post imageUrl={item.imageUrl} />
        </div>
      ))}
    </>
  );
};

export default PostContainer;
