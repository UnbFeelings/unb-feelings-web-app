import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

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

  handleChange(courseId){
    this.props.onChange(courseId)
    console.log("course: "+courseId)
  }

  render(){
    const list = this.state.coursesList.map((course, i) => <MenuItem key={course.id} onSelect={() => this.handleChange(course.id)}  active={this.course === course.id ? true : false}>{course.name}</MenuItem>)

    return this.state.isLoad === true? (
      <div><DropdownButton id="courses-button" title="curso">{list}</DropdownButton></div>
    ):(<h1>loading ... </h1>)
  }
}

export default ButtonCourses;
