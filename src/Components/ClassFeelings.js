import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import SentimentPost from './SentimentPost'


class ClassFeelings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      selectedSubject: '',
      wasLoaded: false
    }
    this.fetchData = this.fetchData.bind(this)
  }

  async componentDidMount(){
    const responseJson = await this.fetchData()
    const listClassFeelings = [];
    const responseJsonClassFeelings = responseJson.results.map((result, id) => {
      if(result.subject != null){
          listClassFeelings.push(result);
      }
    })
    this.setState({
      posts: listClassFeelings,
      wasLoaded: true
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
    return this.state.wasLoaded === true? (
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
