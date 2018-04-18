import React from 'react';
//import UnButton from './UnButton'
import { FormControl, FormGroup, Form, Button}  from 'react-bootstrap'
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//import Button from 'material-ui/Button';
//import {Button, Grid }from 'material-ui';
import { Route, Link } from 'react-router-dom'


class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      token: "",
      id: ""
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // componentWillUnmount() {
  //   alert('Goodbye world');
  // }

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
      <Form inline>
        <FormGroup style={{ marginRight: 10 }}>
           <FormControl type="email" placeholder="email@email.com" onChange={this.handleChangeEmail} />
        </FormGroup>

        <FormGroup style={{ marginRight: 10 }}>
          <FormControl type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        </FormGroup>

        <Link to={{pathname: "/feelingsPage", email: this.state.email}} >
          <Button bsStyle="primary" onClick={this.handleClick}>Entrar</Button>
        </Link>
      </Form>
    );
  }
}

export default LoginForm;
