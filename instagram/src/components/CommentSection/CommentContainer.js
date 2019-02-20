import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

/* <CommentContainer data={item} addComment={props.addComment} /> */

const CommentContainer = props => {
  console.log("These are comment container props", props);
  return (
    <div className="comment-container">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p classname="likes">
        <strong>{props.item.likes} likes</strong>
      </p>
      <div>
        {props.item.comments.map(item => (
          <Comment className="comment" key={item.text} commentItem={item} />
        ))}
      </div>

      <div>
        <CommentInput commentList={props.item.comments} />
      </div>
    </div>
  );
};

export default CommentContainer;

// comments={item.comments}
// likes={item.likes}
// timestamp={item.timeStamp}
// addComment={item.addComment}
