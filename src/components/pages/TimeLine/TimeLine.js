import React from 'react';
import PostCell from './PostCell';

class TimeLine extends React.Component {
  render() {
    return (
      <div>
        <ul>{this.props.postList.map(post => <PostCell key={post.id} post={post} />)}</ul>
      </div>
    );
  }
}


export default TimeLine;
