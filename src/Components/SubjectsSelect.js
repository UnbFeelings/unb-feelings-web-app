import React from 'react'
import { Checkbox, ListGroupItem, ListGroup } from 'react-bootstrap'

class SubjectsSelect extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subjectsList: [],
      SubjectsSelect: [],
      isLoad: false
    }
    this.fetchSubjects = this.fetchSubjects.bind(this)
  }

  async componentDidMount(){
    const responseJson = await this.fetchSubjects()
    const subjects = responseJson.results
    this.setState({
      subjectsList: [...subjects],
      isLoad: true
    });
  }

  async fetchSubjects(){
    const response = await fetch('http://localhost:8000/api/subjects/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    })

    const responseJson = await response.json()
    return responseJson
  }

  render(){
    const list = this.state.subjectsList.map((subject) => <ListGroupItem><Checkbox>{subject.name}</Checkbox></ListGroupItem>)

    return this.state.isLoad == true? (
      <ListGroup>{list}</ListGroup>
    ):(<h1>loading ... </h1>)
  }
}

export default SubjectsSelect
