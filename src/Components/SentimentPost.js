import React from 'react'
import { Panel } from 'react-bootstrap'

class SentimentPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {posts: this.props.posts}
  }

  render(){
    const list = this.state.posts.map((post) => {
      return(
        <Panel key={post.id} bsStyle="primary">
          <Panel.Heading>
            <Panel.Title>{post.subject}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{post.content}</Panel.Body>
        </Panel>
      )
    })

    return(
      <div>{list}</div>
    )
  }
}

export default SentimentPost
