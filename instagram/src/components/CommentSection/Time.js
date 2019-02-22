import React from "react";
import moment from "moment";

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: props.post.timestamp
    };
  }
  render() {
    let march = moment(
      this.state.dateTime,
      "MMMM Do YYYY, hh:mm:ss a"
    ).fromNow();

    console.log(march);
    return <div> {march} </div>;
  }
}
export default Time;
