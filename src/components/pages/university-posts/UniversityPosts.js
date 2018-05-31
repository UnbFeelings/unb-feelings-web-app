import React from 'react';
import axios from '../../../configs/axios';

import PostListItem from '../../shared/PostListItem';

class UniversityPosts extends React.Component {
  state = {
    posts: [],
    subjects: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // eslint-disable-next-line arrow-parens
    axios.get('/posts/').then(resp => {
      this.setState({ posts: resp.data.results });
    });

    // eslint-disable-next-line arrow-parens
    axios.get('/subjects/').then(resp => {
      this.setState({ subjects: resp.data.results });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  postTimeLine(post) {
    const subject = this.state.subjects.find(sub => sub.id === post.subject);

    return (
      <PostListItem
        subject={subject ? subject.name : '?????'}
        emotion={post.emotion}
        tags={post.tag}
        key={post.id}
      />
    );
  }

  render() {
    const postsTimeLisne = this.state.posts.map(post => this.postTimeLine(post));

    return (
      <div className="UniversityPosts">
        {postsTimeLisne}
      </div>
    );
  }
}

export default UniversityPosts;
