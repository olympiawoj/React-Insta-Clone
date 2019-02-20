import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      comments: props.post.comments,
      post: props.post
    };
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        { username: "olympia-wojcik", text: this.state.commentInput }
      ],
      commentInput: ""
    });
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // submitComment = event => {
  //   event.preventDefault();
  //   this.addNewComment(event, this.state.commentInput);
  // };

  render() {
    return (
      <div className="comment-container">
        <i className="far fa-heart comment-icons" />
        <i className="far fa-comment comment-icons" />
        <p classname="likes">
          <strong>{this.state.post.likes} likes</strong>
        </p>
        <div>
          {this.state.comments.map(comment => (
            <Comment
              className="comment"
              key={comment.text}
              commentItem={comment}
            />
          ))}
        </div>

        <div>
          <CommentInput
            handleChanges={this.handleChanges}
            addNewComment={this.addNewComment}
            comments={this.state.comments}
            commentInput={this.state.commentInput}
          />
        </div>
      </div>
    );
  }
}

export default CommentSection;

// comments={item.comments}
// likes={item.likes}
// timestamp={item.timeStamp}
// addComment={item.addComment}
