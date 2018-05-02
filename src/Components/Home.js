import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
// import CarouselForm from './CarouselForm'
// import HeaderForm from './HeaderForm'
//import '../assets/css/styles.css'

class Home extends React.Component {

  render(){
    return (
      <Grid>
        <Row>
          <Col sm={12} md={6}>

          </Col>
          <Col sm={12} md={6}>
            <div className="App-loggin">
              <LoginForm />
            </div>
            <div className="App-signup">
              <SignUpForm />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
