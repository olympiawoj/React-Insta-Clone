import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

//Our comment section component holds our

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      comments: props.post.comments,
      post: props.post
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewComment = (event, item) => {
    event.PreventDefault();
    console.log(item);

    const newComment = {
      username: "test-username",
      text: item
    };

    this.setState({ comments: [...this.state.comments], newComment });
  };

  render() {
    return (
      <div className="comment-container">
        <i className="far fa-heart" />
        <i className="far fa-comment" />
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
            addComment={this.addNewComment}
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
