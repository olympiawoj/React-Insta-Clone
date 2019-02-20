import React from "react";

import "./CommentSection.css";
// import PropTypes from "prop-types";

const Comment = props => {
  console.log("These are props in Comment", props);
  return (
    <div className="comments-section">
      <p>
        <strong>{props.commentItem.username}</strong> {props.commentItem.text}
      </p>
    </div>
  );
};
export default Comment;

// Comment.propTypes = {
//   item: PropTypes.shape({
//     username: PropTypes.string,
//     text: PropTypes.string
//   })
// };
