import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class ButtonCourses extends React.Component {
  constructor(props){
    super(props)
    this.state = {course: "1"}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(eventKey){
    this.props.onChange(eventKey)
  }

  render(){
    return (
      <div>
        <DropdownButton id="courses-button" title="curso">
          <MenuItem eventKey="1" onSelect={this.handleChange}>Engenharia</MenuItem>
          <MenuItem eventKey="2" onSelect={this.handleChange}>Engenharia de Software</MenuItem>
          <MenuItem eventKey="3" onSelect={this.handleChange}>Engenharia Eletrônica</MenuItem>
          <MenuItem eventKey="4" onSelect={this.handleChange}>Engenharia Aeroespacial</MenuItem>
          <MenuItem eventKey="5" onSelect={this.handleChange}>Engenharia de Energia</MenuItem>
          <MenuItem eventKey="6" onSelect={this.handleChange}>Engenharia Automotiva</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}

export default ButtonCourses;
