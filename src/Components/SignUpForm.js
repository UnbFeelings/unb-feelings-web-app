import React from 'react';
import { FormControl, FormGroup, Form, Button, Checkbox, Grid } from 'react-bootstrap'
import ButtonCourses from './ButtonCourses'

class SignUpForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      course: "1"
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.changeCourse = this.changeCourse.bind(this)
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

  changeCourse(newCourse){
    this.setState({
      course: newCourse
    })
  }

  handleClick(e){
    console.log(this.state.course)
    console.log(this.state.email)

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

      <Grid>
        <Form horizontal>

        <FormGroup controlId="formInlineCurso">
          <h2>Participe!</h2>
        </FormGroup>

        <FormGroup controlId="formInlineEmail">
           <FormControl
              type="email"
              placeholder="email@email.com"
              onChange={this.handleChangeEmail}
            />
        </FormGroup>

        <FormGroup controlId="formInlineSenha">
            <FormControl
            type="password"
            placeholder="senha"
            onChange={this.handleChangePassword}
        />
        </FormGroup>

        <ButtonCourses onChange={this.changeCourse}/>

        <FormGroup>
          <Checkbox>Aceito todos os termos</Checkbox>
        </FormGroup>
        </Form>

        <Button bsStyle="primary" onClick={this.handleClick}>Cadastrar</Button>
      </Grid>
    );
  }
}

export default SignUpForm;
