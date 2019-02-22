import React from "react";
import moment from "moment";
import "./CommentSection.css";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: props.post.timestamp
    };
  }
  render() {
    let march = moment(this.state.dateTime, "MMMM Do YYYY, hh:mm:ss a")
      .fromNow()
      .toUpperCase();

    return <p className="time"> {march} </p>;
  }
}
export default Time;
