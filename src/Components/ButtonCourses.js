import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class ButtonCourses extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      course: "",
      coursesList: [],
      isLoad: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount(){
    const responseJson = await this.fetchSubjects()
    const courses = responseJson.results
    this.setState({
      coursesList: [...courses],
      isLoad: true
    });
  }

  async fetchSubjects(){
    const response = await fetch('http://localhost:8000/api/courses/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    })

    const responseJson = await response.json()
    return responseJson
  }

  getValidationField(value){
    let status

    if(value) status = 'success'
    else if(value === "") status = null
    else  status = 'error'

    return status
  }

  handleChange(event){
    const courseId = event.target.value

    this.setState({
      course: courseId
    })

    this.props.onChange(courseId)
    console.log("course: "+courseId)
  }

  render(){
    const list = this.state.coursesList.map((course, i) => <option key={course.id} value={course.id}>{course.name}</option>)

    return this.state.isLoad === true? (
      <div>
        <FormGroup controlId="formControlsSelect" onChange={this.handleChange} validationState={this.getValidationField(this.state.course)}>
          <ControlLabel>Selecione o curso</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            {list}
          </FormControl>
        </FormGroup>
      </div>
    ):(<h1>loading ... </h1>)
  }
}

export default ButtonCourses;
