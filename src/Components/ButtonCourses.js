import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ButtonCourses extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      course: "",
      coursesList: [],
      wasLoaded: false
    }
    this.updateCourse = this.updateCourse.bind(this)
  }

  async componentDidMount(){
    const responseJson = await this.fetchSubjects()
    const courses = responseJson.results
    this.setState({
      coursesList: [...courses],
      wasLoaded: true
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

  updateCourse(newCourse) {
		this.setState({
			selectValue: newCourse,
		});
    this.props.onChange(newCourse);
    console.log("course: "+newCourse)
	}

  render(){
    const listOptions = []
    const list = this.state.coursesList.map((course, i) => {
      return listOptions.push({value: course.id, label: course.name})
    })

    return this.state.wasLoaded === true? (
      <Select
        id="course-select"
        name="selected-course"
        placeholder="Selecione um curso"
        simpleValue
        autoFocus
        onBlurResetsInput={false}
        onSelectResetsInput={false}
        options={listOptions}
        disabled={false}
        clearable={true}
        value={this.state.selectValue}
        onChange={this.updateCourse}
        rtl={false}
        searchable={true}
      />
    ):(<h1>loading ... </h1>)
  }
}

export default ButtonCourses;
