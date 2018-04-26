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

  login() {
    this.props.auth.login(this.state.email, this.state.password);
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

        <Button bsStyle="primary" onClick={this.login.bind(this)}>Entrar</Button>

      </Form>
    ):(<Redirect to={{pathname: "/feelings", email: this.state.email, id: this.state.id}}/>)
  }
}

export default LoginForm;
