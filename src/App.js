import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Header from './Components/Header'
import About from './Components/About'
import Reviews from './Components/Reviews'
import Features from './Components/Features'
import GetApp from './Components/GetApp'
import Support from './Components/Support'
import Footer from './Components/Footer'


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
          <div className="wrapper">
          <About/>
          <Reviews/>
          <Features/>
          <GetApp/>
          <Support/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
