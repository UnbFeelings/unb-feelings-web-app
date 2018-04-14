import React from 'react';
import './App.css'
//import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render(){
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">Home</Link>
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'test')}
              >
                Test
              </Button>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
