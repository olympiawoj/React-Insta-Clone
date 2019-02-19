import React from "react";
import Comment from "./Comment";

const CommentContainer = props => {
  console.log("These are comment container props", props);
  return (
    <>
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p>
        <strong>{props.likes} likes</strong>
      </p>
      <div>
        {props.comments.map(item => (
          <Comment key={props.username} item={item} />
        ))}
      </div>

      <div>
        <form>
          <input
            type="text"
            name="commentInput"
            placeholder="Add a comment..."
          />
        </form>
      </div>
    </>
  );
};

export default CommentContainer;
