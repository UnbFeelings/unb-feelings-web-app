import React from 'react';
import './App.css'
//import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import { FormGroup, FormControl } from 'react-bootstrap'

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
              <Link to="/home">UNB Feelings</Link>                          
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/feelingsPage">Compartilhar sentimentos</Link> 
            </Navbar.Brand>
          </Navbar.Header>          
        </Navbar>
        <footer className="App-footer navbar-fixed-bottom">
          <div className="container">
            <div className="row">
              <p>Sobre: <a href="home">UnB Feelings</a> </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
