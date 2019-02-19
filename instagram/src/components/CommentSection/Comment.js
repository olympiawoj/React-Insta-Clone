import React from "react";

const Comment = props => {
  console.log("These are props in Comment", props);
  return (
    <div className="comments-section">
      <p>
        <strong>{props.item.username}</strong> {props.item.text}
      </p>
    </div>
  );
};
export default Comment;

//Comment is an array of objects
