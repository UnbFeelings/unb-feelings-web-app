import React from 'react';
import './assets/css/styles.css'
//import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import { FormGroup, FormControl } from 'react-bootstrap'
import Header from './Components/Header'

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
        <Header/>
          <div class="wrapper">
        </div>
      </div>
    );
  }
}

export default App;
