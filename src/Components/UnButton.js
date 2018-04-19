import React from 'react'
import { Button } from 'react-bootstrap';

class UnButton extends React.Component {
    render(){
        return (
            <Button bsStyle={this.props.bsStyle} onClick={( ) => {
                alert(this.props.alert)
            } }>{this.props.text}</Button>
        )
    }
}

export default UnButton;
