import React from 'react';
import axios from '../../../configs/axios';
import PostListItem from '../../shared/PostListItem';

class UniversityPosts extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    const { userId } = this.props.match.params;
    if (userId === undefined) {
      this.fetchUniversityData();
    } else {
      this.fetchUserData(userId);
    }
  }

  fetchUserData(userId) {
    axios.get(`/posts/user/${userId}/`).then(resp => {
      this.setState({ posts: resp.data.results });
    });
  }

  fetchUniversityData() {
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
