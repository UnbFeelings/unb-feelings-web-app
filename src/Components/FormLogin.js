import React from 'react';
import Nsei from './Nsei'

class FormLogin extends React.Component{
  constructor(props){
    super(props)
    this.state = { name : "" }
    this.handleEvent = this.handleEvent.bind(this)
  }


  handleEvent(e){
    this.setState({
      name: e.target.value
    });
  }

  render(){
    return (
      <div className="container">
        <h1>Welcome {this.state.name}</h1>

        <input type="text" placeholder="username" onChange={this.handleEvent}/>
        <input type="password" placeholder="senha"/>

        <Nsei texto="login" alert="qualquer" link="/test"/>
        <Nsei texto="Esqueci minha senha" alert="diferente" />
      </div>
    );
  }
}

export default FormLogin;
