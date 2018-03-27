import React from 'react'

class Nsei extends React.Component {
    render(){
        return (
            <button onClick={( ) => {
                alert(this.props.alert)
            } }>{this.props.texto}</button>
        )
    }
}

export default Nsei;
