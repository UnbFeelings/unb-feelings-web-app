import React from 'react';
import './App.css'
import Nsei from './Components/Nsei'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name : "",
      loading : false
    }
  }

  render(){
    return this.state.loading == true ? (
      <h1>Carregando</h1>
    ) : (
      <div className="container">
        <h1>Welcome {this.state.name}</h1>
        <input type="text" placeholder="username" onChange={(event)=>{
          this.setState({
            name:event.target.value
          })
        }}/>
        <input type="password" placeholder="senha"/>

        <Nsei texto="login" alert="qualquer"/>
        <Nsei texto="Esqueci minha senha" alert="diferente" />
        </div>
    )
  }
}

export default App;
