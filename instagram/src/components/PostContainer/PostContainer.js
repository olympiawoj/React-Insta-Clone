import React from "react";
import Post from "./Post";
/* 
Post Container is a child component of App.js. In App.js we passed down state,an array of post objects, via props.

Posts is a list of Post objects

We map through our list of Post objects and for each one, create a Post
In our Post we pass in our post data, i.e each object's data.
/> */

const PostContainer = props => {
  // console.log("These are props in PostContainer", props);
  return (
    <>
      {props.posts.map(post => (
        <div key={post.username} className="post-container">
          <Post key={post.imageUrl} post={post} />
        </div>
      ))}
    </>
  );
};

export default PostContainer;
