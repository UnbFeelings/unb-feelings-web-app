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
      wasLogged: false,
      wasAcceptedTerms: false,
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

  handleAcceptTerms(event){
    const isChecked = event.target.checked
    this.setState({
      wasAcceptedTerms: isChecked
    })
  }

  changeCourse(newCourse){
    this.setState({
      course: newCourse
    })
  }

  validadeFilds(){
    let isValid = false
    if(this.state.wasAcceptedTerms === true){
      isValid = true
    }else{
      isValid = false
    }
    return isValid
  }

  async handleClick(){
    if(this.validadeFilds()){
      const responseJson = await this.fetchData()

      if(responseJson.id !== undefined){
        this.setState({
          id: responseJson.id,
          email: responseJson.email,
          wasLogged: true
        });
      }else{
        alert("não foi possível realizar o cadastro")
      }
    }else{
      alert("preencha corretamente os campos")
    }
  }

  getValidationAcceptTerms(value){
    if(value) return 'success'
    else return null
  }

  getEmailValidation(email){
    let status

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailRegex.test(String(email).toLowerCase())

    if(isValid) status = 'success'
    else if(email === "") status = null
    else  status = 'error'

    return status
  }

  getValidationPassword(password) {
    const length = password.length;
    if (length > 8) return 'success';
    else if (length > 6) return 'warning';
    else if (length > 0) return 'error';
    return null;
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
    .then(response => response.json())
    .catch(error => console.log(console.error()))

    return response
  }

  render(){
    return this.state.wasLogged === false? (
      <Grid>
        <Form horizontal>

        <FormGroup controlId="formInlineCurso">
          <h2>Participe!</h2>
        </FormGroup>

        <FormGroup controlId="formInlineEmail" validationState={this.getEmailValidation(this.state.email)}>
           <FormControl
              type="email"
              placeholder="email@email.com"
              onChange={this.handleChangeEmail}
            />
        </FormGroup>

        <FormGroup controlId="formInlineSenha" validationState={this.getValidationPassword(this.state.password)}>
            <FormControl
            type="password"
            placeholder="senha"
            onChange={this.handleChangePassword}
            />
        </FormGroup>

        <ButtonCourses onChange={this.changeCourse}/>

        <FormGroup validationState={this.getValidationAcceptTerms(this.state.wasAcceptedTerms)}>
          <Checkbox onClick={(event) => this.handleAcceptTerms(event)}>Aceito todos os termos</Checkbox>
        </FormGroup>
        </Form>

        <Button bsStyle="primary" onClick={this.handleClick}>Cadastrar</Button>
      </Grid>):(<Redirect to={{pathname: "/feelings", email: this.state.email, id: this.state.id}}/>)
  }
}

export default SignUpForm;
