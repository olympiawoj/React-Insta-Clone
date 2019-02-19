import React from "react";
import Comment from "./Comment";

const CommentContainer = props => {
  console.log("These are comment container props", props);
  return (
    <>
      <div>
        {props.comments.map(item => (
          <Comment item={item} />
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
