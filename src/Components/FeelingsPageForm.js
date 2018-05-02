import React from 'react'

class FeelingsPageForm extends React.Component {
	render(){
        return (
            <h1>FeelingsPage {this.props.location.email} id {this.props.location.id}</h1>
        );
    }
}

export default FeelingsPageForm
