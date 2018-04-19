import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class DayFeelings extends React.Component {
  constructor(props){
    super(props)
    this.state = {id: this.props.id, email: this.props.email}
  }

  ComponentWillMount(){
    //request api
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col>
            <h1>feelings about days</h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default DayFeelings
