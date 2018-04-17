import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
// import CarouselForm from './CarouselForm'
// import HeaderForm from './HeaderForm'

class Home extends React.Component {
  render(){
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6}>

          </Col>
          <Col sm={12} md={6}>
            <LoginForm />
            <SignUpForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
