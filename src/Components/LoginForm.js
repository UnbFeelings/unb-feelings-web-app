import React from 'react';
//import UnButton from './UnButton'
import { FormControl, FormGroup, Form, Button}  from 'react-bootstrap'
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//import Button from 'material-ui/Button';
//import {Button, Grid }from 'material-ui';
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      id: "",
      token: undefined,
      wasLogged: false
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.fetchData = this.fetchData.bind(this)
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

  async handleClick(){
    const responseJson = await this.fetchData()

    if(responseJson !== undefined){
      this.setState({
        token: responseJson.token,
        id: responseJson.user,
        wasLogged: true
      });
    }else{
      alert("Não foi possível realizar o loggin")
    }
  }

  async fetchData(){
    const response = await fetch('http://localhost:8000/api/token-auth/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .catch(error => console.log(console.error()))

    return response
  }

  render(){
    return this.state.wasLogged === false? (
      <Form inline>
        <FormGroup style={{ marginRight: 10 }}>
           <FormControl type="email" placeholder="email@email.com" onChange={this.handleChangeEmail} />
        </FormGroup>

        <FormGroup style={{ marginRight: 10 }}>
          <FormControl type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleClick}>Entrar</Button>

      </Form>
    ):(<Redirect to={{pathname: "/feelings", email: this.state.email, id: this.state.id}}/>)
  }
}

export default LoginForm;
