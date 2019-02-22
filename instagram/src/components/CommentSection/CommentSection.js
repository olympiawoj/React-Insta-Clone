import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: "",
      comments: props.post.comments,
      post: props.post,
      likes: props.post.likes,
      heartColor: "black",
      heartIcon: "far fa-heart comment-icons"
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

  incrementLikes = () => {
    console.log("we are incrementing");
    let likes = this.state.likes + 1;
    this.setState({ likes: likes });
  };

  handleLikeClick = () => {
    this.setState({ heartColor: "#F04855" });
    this.setState({ heartIcon: "fas fa-heart comment-icons" });
  };

  render() {
    return (
      <div className="comment-container">
        <button onClick={this.incrementLikes}>
          <i
            className={this.state.heartIcon}
            style={{ color: this.state.heartColor }}
            onClick={this.handleLikeClick}
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
