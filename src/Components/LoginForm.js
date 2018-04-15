import React from 'react';
// import Nsei from './Nsei'
import { FormControl, FormGroup, Form, Button} from 'react-bootstrap'

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
      
      <Form inline>    
        <div>
        <FormGroup controlId="formInlineEmail">
          {/* <ControlLabel>Email</ControlLabel>*/}
           <FormControl type="email" placeholder="email@email.com" onChange={this.handleChangeEmail} />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
          {/* <ControlLabel>Senha</ControlLabel>*/}
          <FormControl type="password" placeholder="senha" onChange={this.handleChangePassword}/>
        </FormGroup>{' '} 
        
        <FormGroup> 
               
            <Button bsStyle="primary" type="submit" onClick={this.handleClick}>Entrar</Button>
            
        
      </FormGroup>
      </div>
      </Form>

    );
  }
}

export default LoginForm;
