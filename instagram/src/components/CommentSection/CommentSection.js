import React from "react";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "testing"
    };
  }
  render() {
    return (
      <form>
        <input type="text" name="commentInput" placeholder="Testing" />
      </form>
    );
  }
}
export default CommentSection;
