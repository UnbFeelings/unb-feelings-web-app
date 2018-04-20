import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ClassFeelings from './ClassFeelings'
import DayFeelings from './DayFeelings'
import FeelingsForm from './FeelingsForm'

class Feelings extends React.Component {
  render(){
    return(
      <Grid>
        <Row>
          <Col>
            <FeelingsForm id={this.props.location.id} email={this.props.location.email} />
          </Col>
          <Col>
            <ClassFeelings id={this.props.location.id} email={this.props.location.email}/>
          </Col>
          <Col>
            <DayFeelings id={this.props.location.id} email={this.props.location.email}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Feelings
