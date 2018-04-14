import React from 'react';
import FormLogin from './FormLogin'
import SignUpForm from './SignUpForm'

class Home extends React.Component {
    render(){
        return (
          <div>
            <h1>Home</h1>
            <FormLogin />
            <SignUpForm />
          </div>
        )
    }
}

export default Home;
