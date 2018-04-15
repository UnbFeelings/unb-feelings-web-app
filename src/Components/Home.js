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
        <Row className="show-grid">
    		<Col xs={6}>
      			
    		</Col>
    		<Col xs={6}>
      			
	    		<div>   
	            	<LoginForm />
          		</div>
          		<div>
      				<SignUpForm />
      			</div>
    		</Col>
  		</Row>	
        </Grid>  
          

        )
    }
}

export default Home;
