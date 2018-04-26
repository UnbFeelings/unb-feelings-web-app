import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import SentimentPost from './SentimentPost'

class DayFeelings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      wasLoaded: false
    }
  }

  async componentDidMount(){
    const responseJson = await this.fetchData()
    const listDayFeelings = [];
    const responseJsonDayFeelings = responseJson.results.map((result, id) => {
      //If a subject isn't selected, there's a day feeling
      if(result.subject === null){
          listDayFeelings.push(result);
      }
    })
    this.setState({
      posts: listDayFeelings,
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
    return this.state.wasLoaded === true?(
      <Grid>
        <Row>
          <h1>Feelings about days</h1>
          <Col>
            <SentimentPost posts={this.state.posts}/>
          </Col>
        </Row>
      </Grid>
    ):(<h1>loading ... </h1>)
  }
}

export default DayFeelings
