import React from "react";
import PostHeader from "./PostHeader";
import Post from "./Post";
import CommentContainer from "../CommentSection/CommentContainer";

/* 
dataArray is a list of Post objects
We map through our list of Post objects and for each one, create a Comment Container
In our comment container we pass through our item 

<PostContainer
dataArray={this.state.dataArray}
addComment={this.addComment}

postArray
/> */

const PostContainer = props => {
  console.log("These are props in PostContainer", props);
  return (
    <>
      {props.dataArray.map(item => (
        <div key={item.username} className="post-container">
          <PostHeader
            username={item.username}
            thumbnailUrl={item.thumbnailUrl}
          />
          <Post imageUrl={item.imageUrl} />
          <CommentContainer item={item} />
        </div>
      ))}
    </>
  );
};

export default PostContainer;
