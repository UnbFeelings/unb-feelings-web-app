import React from 'react';
import { FormControl, FormGroup, Form, Button, Checkbox, Grid } from 'react-bootstrap'
import ButtonCourses from './ButtonCourses'
import { Redirect } from 'react-router-dom'
import SubjectsSelect from './SubjectsSelect'

class SignUpForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      course: "",
      isLogged: false,
      id: ""
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

  async handleClick(){
    const responseJson = await this.fetchData()

    if(responseJson.id !== undefined){
      this.setState({
        id: responseJson.id,
        email: responseJson.email,
        isLogged: !this.state.isLogged
      });
    }
  }

  async fetchData(){
    const response = await fetch('http://localhost:8000/api/users/', {
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
    })

    const responseJson = await response.json()
    return responseJson
  }

  render(){
    return this.state.isLogged === false? (
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
        <SubjectsSelect />

        <FormGroup>
          <Checkbox>Aceito todos os termos</Checkbox>
        </FormGroup>
        </Form>

        <Button bsStyle="primary" onClick={this.handleClick}>Cadastrar</Button>
      </Grid>):(<Redirect to={{pathname: "/feelings", email: this.state.email, id: this.state.id}}/>)
  }
}

export default SignUpForm;
