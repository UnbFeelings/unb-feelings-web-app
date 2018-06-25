import React from 'react';
import axios from '../../../configs/axios';
import PostListItem from '../../shared/PostListItem';
import SupportForm from '../../shared/SupportForm';

class UniversityPosts extends React.Component {
  state = {
    posts: [],
    postsFromUser: false,
  };

  componentDidMount() {
    const { userId } = this.props.match.params;
    if (userId === undefined) {
      this.fetchUniversityData();
    } else {
      this.fetchUserData(userId);
    }
  }

  fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`/posts/user/${userId}/`);
      this.setState({ posts: response.data.results, postsFromUser: true });
    } catch (err) {
      alert(err);
    }
  };

  fetchUniversityData = async () => {
    try {
      const response = await axios.get('/posts/');
      this.setState({ posts: response.data.results });
    } catch (err) {
      alert(err);
    }
  };

  postTimeLine = (post) => (
    <a key={post.id} href={`/university-posts/${post.author}`}>
      <PostListItem
        subject={post.subject.name}
        emotion={post.emotion}
        tags={post.tag}
        key={post.id}
      />
    </a>
  );

  supportForm = () => {
    if (!this.state.postsFromUser) {
      return null;
    }

    const { userId } = this.props.match.params;

    return <SupportForm studentTo={userId} />;
  };

  createTimeLine = () => this.state.posts.map(post => this.postTimeLine(post));

  render() {
    return (
      <div className="UniversityPosts">
        {this.supportForm()}
        {this.createTimeLine()}
      </div>
    );
  }
}

export default UniversityPosts;
