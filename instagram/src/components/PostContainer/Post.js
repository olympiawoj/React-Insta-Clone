import React from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";

//insidePost, we need to display PostHeader and PostImg and our Comment Section

const Post = props => {
  // console.log("These are props in Post component", props);
  return (
    <>
      {" "}
      <PostHeader post={props.post} />
      <img className="post-img" src={props.post.imageUrl} alt="test" />
      <CommentSection post={props.post} />
    </>
  );
};

export default Post;
