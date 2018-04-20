import React from 'react'

class SentimentPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {posts: this.props.posts}
  }

  render(){
    const list = this.props.posts.map((post) => <li>{post.content}</li>)

    return(
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default SentimentPost
