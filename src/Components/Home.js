import React from 'react';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { Grid, Row, Col } from 'react-bootstrap'

class Home extends React.Component {
    render(){
        return (
          <Grid>
            <Row className="show-grid">
              <Col sm={12} md={6}>
              </Col>
              <Col sm={12} md={6}>
                <SignUpForm />
                <LoginForm />
              </Col>
            </Row>
          </Grid>
        )
    }
}

export default Home;
