import React from "react";
import "./CommentContainer.css";
import PropTypes from "prop-types";

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

Comment.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

// comments: [
//     {
//       username: "philzcoffee",
//       text:
//         "We've got more than just delicious coffees to offer at our shops!"
//     },
