import React from 'react';

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
      <div className="container">
        <h1>Welcome</h1>

        <input type="text" placeholder="email" onChange={this.handleChangeEmail}/>
        <input type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        <input type="text" placeholder="curso" onChange={this.handleChangeCourse}/>

        <button onClick={this.handleClick}>Cadastrar</button>
      </div>
    );
  }
}

export default SignUpForm;
