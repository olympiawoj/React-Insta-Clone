import React from "react";

const CommentInput = props => {
  return (
    <form className="commentForm" onSubmit={props.addNewComment}>
      <input
        id="form-input"
        type="text"
        name="commentInput"
        placeholder="  Add a comment..."
        value={props.commentInput}
        onChange={props.handleChanges}
      />
      <button onClick={props.addNewComment}>
        <i className="fas fa-ellipsis-h" />
      </button>
    </form>
  );
};

export default CommentInput;

//Our addComment method needs to add a comment to our commentsarray. Where is our comments array being managed? Levels UP on our parent function App.js. If we want to get data from a child component to a parent component, the only way to do that is to define a function in the parent component, pass it down as a callback function. Then invoke that CB function...
