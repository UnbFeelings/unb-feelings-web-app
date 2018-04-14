import React from 'react';
import Nsei from './Nsei'

class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      token: ""
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  handleChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  handleClick(e){
    fetch('http://localhost:8000/api/token-auth/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) => response.json())
    .then((result) => {
      this.setState({
        token: result.token
      });
      console.log(this.state.token)
    })
  }

  render(){
    return (
      <div className="container">
        <h1>Login</h1>

        <input type="text" placeholder="email" onChange={this.handleChangeEmail}/>
        <input type="password" placeholder="senha" onChange={this.handleChangePassword}/>

        <button onClick={this.handleClick}>Entrar</button>
        <Nsei texto="Esqueci minha senha" alert="diferente" />
      </div>
    );
  }
}

export default LoginForm;
