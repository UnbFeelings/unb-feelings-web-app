import React from 'react';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

class Home extends React.Component {
    render(){
        return (
          <div>
            <h1>Home</h1>
            <SignUpForm />
            <LoginForm />
          </div>
        )
    }
}

export default Home;
