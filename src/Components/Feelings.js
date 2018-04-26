import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ClassFeelings from './ClassFeelings'
import DayFeelings from './DayFeelings'
import FeelingsForm from './FeelingsForm'
import { Redirect } from 'react-router-dom'

class Feelings extends React.Component {
  constructor(props){
    super(props)
  }

  //const { isAuthenticated } = this.props.auth;

  render(){
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      {
        isAuthenticated() && (
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
      {
        !isAuthenticated() && (
          <Redirect to="/home"/>
        )
      }
      </div>
    )
  }
}

export default Feelings
