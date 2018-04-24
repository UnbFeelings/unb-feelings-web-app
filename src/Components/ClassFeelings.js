import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import SentimentPost from './SentimentPost'

class ClassFeelings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      email: this.props.email,
      posts: [],
      isLoad: false
    }
    this.fetchData = this.fetchData.bind(this)
  }

  async componentDidMount(){
    const responseJson = await this.fetchData()

    this.setState({
      posts: responseJson.results,
      isLoad: true
    });
  }

  async fetchData(){
    const response = await fetch('http://localhost:8000/api/posts/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    })

    const responseJson = await response.json()
    return responseJson
  }

  render(){
    return this.state.isLoad === true? (
      <Grid>
        <Row>
          <h1>feelings about classes:</h1>
          <Col>
            <SentimentPost posts={this.state.posts}/>
          </Col>
        </Row>
      </Grid>
    ):(<h1>loading ... </h1>)
  }
}

export default ClassFeelings
