import React from "react";
import PostHeader from "./PostHeader";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";

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
          <CommentSection />
        </div>
      ))}
    </>
  );
};

export default PostContainer;
