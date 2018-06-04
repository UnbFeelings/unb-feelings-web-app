import React from 'react';
import axios from '../../../configs/axios';

import PostListItem from '../../shared/PostListItem';

class UniversityPosts extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/posts/').then(resp => {
      this.setState({ posts: resp.data.results });
    });
  }

  postTimeLine(post) {
    return (
      <PostListItem
        subject={post.subject.name}
        emotion={post.emotion}
        tags={post.tag}
        key={post.id}
      />
    );
  }

  render() {
    const timeLine = this.state.posts.map(post => this.postTimeLine(post));

    return (
      <div className="UniversityPosts">
        {timeLine}
      </div>
    );
  }
}

export default UniversityPosts;
