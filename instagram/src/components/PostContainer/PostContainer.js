import React from "react";
import PostHeader from "./PostHeader";

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
          {/* <Post /> */}
        </div>
      ))}
    </>
  );
};

export default PostContainer;
