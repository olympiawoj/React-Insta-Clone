import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import Time from "./Time";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      comments: props.post.comments,
      post: props.post,
      likes: props.post.likes,
      heartColor: "black",
      heartIcon: "far fa-heart comment-icons",
      showLikeClick: false
    };
  }

  //The filter() method creates a new array with all elements that pass the test implemented by the provided function.

  deleteComments = event => {
    let lastComment = this.state.comments.pop();
    if (lastComment.username === "olympia-wojcik") {
      event.preventDefault();
      this.setState({ comments: [...this.state.comments] });
    }
  };

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

  incrementLikes = () => {
    console.log("we are incrementing");
    let likes = this.state.likes + 1;
    this.setState({ likes: likes });
  };

  decrementLikes = () => {
    let likes = this.state.likes - 1;
    this.setState({ likes });
  };

  handleLikeClick = () => {
    if (!this.state.showLikeClick) {
      this.setState({ heartColor: "#F04855" });
      this.setState({ heartIcon: "fas fa-heart comment-icons" });
      this.incrementLikes();
    } else {
      this.setState({ heartColor: "black" });
      this.setState({ heartIcon: "far fa-heart comment-icons" });
      this.decrementLikes();
    }
  };

  toggleLike = () => {
    this.setState({ showLikeClick: !this.state.showLikeClick });
    this.handleLikeClick();
  };

  render() {
    return (
      <div className="comment-container">
        <button onClick={this.toggleLike}>
          <i
            className={this.state.heartIcon}
            style={{ color: this.state.heartColor }}
            onClick={this.toggleLike}
          />
        </button>
        <i className="far fa-comment comment-icons" />
        <p classname="likes">
          <strong>{this.state.likes} likes</strong>
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
        <Time post={this.state.post} />

        <div>
          <CommentInput
            handleChanges={this.handleChanges}
            addNewComment={this.addNewComment}
            comments={this.state.comments}
            commentInput={this.state.commentInput}
            deleteComments={this.deleteComments}
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
