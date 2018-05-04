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
      isLogged: false
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
    if(responseJson.token !== undefined){
      this.setState({
        token: responseJson.token,
        id: responseJson.user,
        isLogged: !this.state.isLogged
      });
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

    const responseJson = await response.json()
    return responseJson
  }

  render(){
    return this.state.isLogged === false? (
      <Form inline>
        <FormGroup style={{ marginRight: 10 }}>
           <FormControl type="email" placeholder="email@email.com" onChange={this.handleChangeEmail} />
        </FormGroup>

        <FormGroup style={{ marginRight: 10 }}>
          <FormControl type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleClick}>Entrar</Button>

      </Form>
    ):(<Redirect to={{pathname: "/feelingsPage", email: this.state.email, id: this.state.id}}/>)
  }
}

export default LoginForm;
