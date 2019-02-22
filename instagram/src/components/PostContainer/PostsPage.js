import React, { Component } from "react";

import SearchBar from "../SearchBar/SearchBar";

import PostContainer from "./PostContainer";
import dummyData from "./dummy-data";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
      //posts is an array of Post objects
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData //:characters
    });
  }

  searchPosts = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="app">
        <div className="search-bar">
          <SearchBar searchPosts={this.searchPosts} />
        </div>
        <div className="post-container">
          <PostContainer
            posts={
              this.state.filteredPosts.length > 0
                ? this.state.filteredPosts
                : this.state.posts
            }
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;
