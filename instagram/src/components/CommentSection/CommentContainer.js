import React from "react";
import Comment from "./Comment";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: ""
    };
  }
  render() {
    return (
      <div>
        <Comment />
        <form>
          <input
            type="text"
            name="commentInput"
            placeholder="Add a comment..."
          />
        </form>
      </div>
    );
  }
}
export default CommentContainer;
