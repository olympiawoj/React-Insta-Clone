import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <input
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

// class CommentInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   handleChanges = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   //add comment method adds comment to the comments array, which is a property on our PostObj. must be WHERE its rendering...

//   submitComment = event => {
//     event.preventDefault();
//     this.addNewComment(event, this.state.commentInput);
//   };

//   render() {
//     return (
//       <form onSubmit={this.submitComment}>
//         <input
//           type="text"
//           name="commentInput"
//           placeholder="  Add a comment..."
//           value={this.state.commentInput}
//           onChange={this.handleChanges}
//         />
//         <button onClick={this.submitComment}>
//           <i className="fas fa-ellipsis-h" />
//         </button>
//       </form>
//     );
//   }
// }
export default CommentInput;

//Our addComment method needs to add a comment to our commentsarray. Where is our comments array being managed? Levels UP on our parent function App.js. If we want to get data from a child component to a parent component, the only way to do that is to define a function in the parent component, pass it down as a callback function. Then invoke that CB function...
