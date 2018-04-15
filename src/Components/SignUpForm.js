import React from 'react';
import { FormControl, FormGroup, Form, Button, Checkbox, Col } from 'react-bootstrap'

class SignUpForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      course: ""
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeCourse = this.handleChangeCourse.bind(this)
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

  handleChangeCourse(e){
    this.setState({
      course: e.target.value
    });
  }

  handleClick(e){
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        course: this.state.course
      })
    }).then((response) => response.json())
    .then((result) => {
      console.log(result)
    })
  }

  render(){
    return (
        <Form horizontal>
        <FormGroup controlId="formInlineCurso">
          <h2>Participe!</h2>
        </FormGroup>{' '}
        
        <FormGroup controlId="formInlineCurso">
          {/* <ControlLabel>Curso{' '}</ControlLabel>*/}
           <FormControl type="text" placeholder="curso" onChange={this.handleChangeCourse} />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
          {/* <ControlLabel>Email{' '}</ControlLabel>*/}
           <FormControl type="email" placeholder="email@email.com" onChange={this.handleChangeEmail} />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineSenha">
          {/* <ControlLabel>{' '}Senha{' '}</ControlLabel>*/}
          <FormControl type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        </FormGroup>{' '}
        <FormGroup>
          <Col sm={10}>
            <Checkbox>Aceito todos os termos</Checkbox> 
          </Col>
        </FormGroup>
      <Button bsStyle="info"type="submit" onClick={this.handleClick}>Cadastrar</Button>
      </Form>
      
    );
  }
}

export default SignUpForm;
