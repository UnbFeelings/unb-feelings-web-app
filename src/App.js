import React from 'react';
import './App.css'
//import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import { FormGroup, FormControl } from 'react-bootstrap'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  logout() {
    this.props.auth.logout();
  }

  render(){
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid className="App-header">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home" className="App-title" style={{color: 'white'}}>UnB Feelings</Link>
            </Navbar.Brand>
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
