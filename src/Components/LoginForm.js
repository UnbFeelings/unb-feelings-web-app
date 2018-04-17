import React from 'react';
import UnButton from './UnButton'
import { FormControl, FormGroup, Form, Grid, Row, Col}  from 'react-bootstrap'
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//import Button from 'material-ui/Button';
//import {Button, Grid }from 'material-ui';


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

        <Row className="show-grid">
          <Form horizontal>
            <Col xs={6} md={4}>
              <FormGroup  style={{ marginRight: 5 }} controlId="formInlineEmail" >
              {/* <ControlLabel>Email{' '}</ControlLabel>*/}
              <FormControl type="email" placeholder="email@email.com" onChange={this.handleChangeEmail} />
          </FormGroup>{' '}
        </Col>
          <Col xs={6} md={4}>
            <FormGroup style={{ marginRight: 5 }} controlId="formInlineSenha">
              {/* <ControlLabel>{' '}Senha{' '}</ControlLabel>*/}
          <FormControl type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        </FormGroup>{' '}
        </Col>

          <UnButton
            bsStyle="success"
            text="Entrar"
            className="sizeSmall"
            variant="raised"
            type="submit"
            onClick={this.handleClick}/>
      </Form>

</Row>


    );
  }
}

export default LoginForm;
